document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.contact-form');
  const step1 = document.getElementById('form-step1');
  const step2 = document.getElementById('form-step2');
  const step3 = document.getElementById('form-step3');

  const confirmName = document.getElementById('confirm-name');
  const confirmKana = document.getElementById('confirm-kana');
  const confirmTel = document.getElementById('confirm-tel');
  const confirmEmail = document.getElementById('confirm-email');
  const confirmMessage = document.getElementById('confirm-message');

  const errorMessageDiv = document.getElementById('form-error-message');
  const stepIndicators = document.querySelectorAll('.form-steps .step');

  const confirmBtn = document.getElementById('confirm-btn');
  const backBtn = document.getElementById('back-btn');
  const backToTopBtn = document.querySelector('.back-to-top');

  // ステップ切り替え
  function showStep(step) {
    step1.classList.add('hidden');
    step2.classList.add('hidden');
    step3.classList.add('hidden');
    step.classList.remove('hidden');
  }

  // エラー表示クリア
  function clearErrors() {
    errorMessageDiv.textContent = '';
    errorMessageDiv.style.color = '';
    const errorFields = document.querySelectorAll('.error');
    errorFields.forEach(el => el.classList.remove('error'));

    const labels = document.querySelectorAll('label');
    labels.forEach(label => {
      label.style.color = '';
      label.style.fontSize = '';
      if (label.htmlFor === 'name') label.textContent = 'お名前';
      else if (label.htmlFor === 'kana') label.textContent = 'ふりがな';
      else if (label.htmlFor === 'tel') label.textContent = '電話番号';
      else if (label.htmlFor === 'email') label.textContent = 'メールアドレス';
      else if (label.htmlFor === 'message') label.textContent = 'お問い合わせ内容';
    });
  }

  // 「確認画面へ」ボタン
  confirmBtn.addEventListener('click', () => {
    clearErrors();

    let hasError = false;
    const name = form.name;
    const kana = form.kana;
    const tel = form.tel;
    const email = form.email;
    const message = form.message;

    // バリデーション
    if (!name.value.trim()) {
      hasError = true;
      name.classList.add('error');
      const label = document.querySelector('label[for="name"]');
      if (label) {
        label.textContent = '※ お名前';
        label.style.color = 'red';
        label.style.fontSize = '17px';
      }
    }

    if (!kana.value.trim() || !/^[ぁ-んー\s]+$/.test(kana.value.trim())) {
      hasError = true;
      kana.classList.add('error');
      const label = document.querySelector('label[for="kana"]');
      if (label) {
        label.textContent = '※ ふりがな（ひらがなで入力してください）';
        label.style.color = 'red';
        label.style.fontSize = '17px';
      }
    }

    if (!/^\d{11}$/.test(tel.value.trim())) {
      hasError = true;
      tel.classList.add('error');
      const label = document.querySelector('label[for="tel"]');
      if (label) {
        label.textContent = '※ 電話番号 (ハイフンを含まず数字11字を入力してください)';
        label.style.color = 'red';
        label.style.fontSize = '17px';
      }
    }

    if (!email.value.trim() || !email.value.includes('@')) {
      hasError = true;
      email.classList.add('error');
      const label = document.querySelector('label[for="email"]');
      if (label) {
        label.textContent = '※ メールアドレス (@も入力してください)';
        label.style.color = 'red';
        label.style.fontSize = '17px';
      }
    }

    if (!message.value.trim()) {
      hasError = true;
      message.classList.add('error');
      const label = document.querySelector('label[for="message"]');
      if (label) {
        label.textContent = '※ お問い合わせ内容';
        label.style.color = 'red';
        label.style.fontSize = '17px';
      }
    }

    // エラー表示
    if (hasError) {
      errorMessageDiv.textContent = '※入力ミスがあります。';
      errorMessageDiv.style.color = 'red';
      return;
    }

    // 確認画面に表示
    confirmName.textContent = name.value;
    confirmKana.textContent = kana.value;
    confirmTel.textContent = tel.value;
    confirmEmail.textContent = email.value;
    confirmMessage.textContent = message.value;

    showStep(step2);
    stepIndicators[0].classList.remove('current');
    stepIndicators[1].classList.add('current');

    // ⭐ フォーム2の上部にスクロール
    step2.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });

  // 「戻る」ボタン
  backBtn.addEventListener('click', () => {
    showStep(step1);
    stepIndicators[1].classList.remove('current');
    stepIndicators[0].classList.add('current');
  });

  // 「送信」ボタン
  window.submitForm = function () {
    showStep(step3);
    stepIndicators[1].classList.remove('current');
    stepIndicators[2].classList.add('current');
    step3.scrollIntoView({ behavior: 'smooth', block: 'start' });
    // 実際に送信する場合は以下を有効化
    form.submit();
  };

  // 「トップに戻る」ボタン
  backToTopBtn.addEventListener('click', () => {
    form.reset();
    showStep(step1);
    stepIndicators.forEach(step => step.classList.remove('current'));
    stepIndicators[0].classList.add('current');
  });

  // 初期表示
  showStep(step1);
  stepIndicators[0].classList.add('current');
});
