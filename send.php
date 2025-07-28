<?php
// 文字コードを指定（メール送信用）
mb_language("Japanese");
mb_internal_encoding("UTF-8");

// 入力値の取得とサニタイズ
$name = htmlspecialchars($_POST['name'], ENT_QUOTES, 'UTF-8');
$kana = htmlspecialchars($_POST['kana'], ENT_QUOTES, 'UTF-8');
$tel = htmlspecialchars($_POST['tel'], ENT_QUOTES, 'UTF-8');
$email = htmlspecialchars($_POST['email'], ENT_QUOTES, 'UTF-8');
$message = htmlspecialchars($_POST['message'], ENT_QUOTES, 'UTF-8');

// ◆◆ ① 自分宛の通知メール ◆◆
$to = "your-email@example.com"; // ←ここを自分のメールアドレスに変更！

$subject = "【ポートフォリオサイト】お問い合わせがありました";

$body = <<<EOM
以下の内容でお問い合わせがありました。

【お名前】$name
【ふりがな】$kana
【電話番号】$tel
【メールアドレス】$email
【お問い合わせ内容】
$message
EOM;

$headers = "From: $email";

// メール送信
$sendToOwner = mb_send_mail($to, $subject, $body, $headers);

// ◆◆ ② ユーザーへの自動返信メール ◆◆
$subjectUser = "【自動返信】お問い合わせありがとうございます";

$bodyUser = <<<EOM
$name 様

この度は、お問い合わせありがとうございます。
以下の内容で受け付けました。

━━━━━━━━━━━━━━━
【お名前】$name
【ふりがな】$kana
【電話番号】$tel
【メールアドレス】$email
【お問い合わせ内容】
$message
━━━━━━━━━━━━━━━

内容を確認の上、2営業日以内にご連絡いたします。
ご連絡まで今しばらくお待ちくださいませ。

-----------------------
Yuri Koyama Portfolio
-----------------------

※このメールは自動返信です。
EOM;

$headersUser = "From: your-email@example.com"; // ←送信元を自分のアドレスに

$sendToUser = mb_send_mail($email, $subjectUser, $bodyUser, $headersUser);

// ◆◆ 完了ページへリダイレクト ◆◆
if ($sendToOwner && $sendToUser) {
    header("Location: form.html"); // 必要に応じて「thanks.html」などに変更OK
    exit;
} else {
    echo "メール送信に失敗しました。";
}
?>
