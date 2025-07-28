<?php
// 入力データ取得
$name = htmlspecialchars($_POST['name'], ENT_QUOTES, 'UTF-8');
$kana = htmlspecialchars($_POST['kana'], ENT_QUOTES, 'UTF-8');
$tel = htmlspecialchars($_POST['tel'], ENT_QUOTES, 'UTF-8');
$email = htmlspecialchars($_POST['email'], ENT_QUOTES, 'UTF-8');
$message = htmlspecialchars($_POST['message'], ENT_QUOTES, 'UTF-8');

// 送信先メールアドレス
$to = "btonfer@gmail.com";  // ←★ここに自分のメールアドレス入れてね

// メールタイトル
$subject = "【ポートフォリオサイト】お問い合わせがありました";

// メール本文
$body = <<<EOM
以下の内容でお問い合わせがありました。

【お名前】$name
【ふりがな】$kana
【電話番号】$tel
【メールアドレス】$email
【お問い合わせ内容】
$message
EOM;

// メールヘッダー
$headers = "From: $email";

// メール送信
if (mb_send_mail($to, $subject, $body, $headers)) {
    // 成功
    header("Location: form.html"); // サンクスページにリダイレクト
    exit;
} else {
    // エラー処理
    echo "メールの送信に失敗しました。";
}
?>
