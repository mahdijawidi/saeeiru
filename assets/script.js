
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[data-telegram-order]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const name = btn.dataset.telegramOrder || 'دوره';
      const msg = `سلام، برای ثبت‌نام/سفارش «${name}» راهنمایی می‌خواستم.`;
      window.open(`https://t.me/saeeiru?text=${encodeURIComponent(msg)}`, '_blank', 'noopener,noreferrer');
    });
  });

  const form = document.querySelector('#contact-form');
  if(form){
    form.addEventListener('submit', e => {
      e.preventDefault();
      const name = form.querySelector('[name=name]').value.trim();
      const email = form.querySelector('[name=email]').value.trim();
      const subject = form.querySelector('[name=subject]').value.trim() || 'ارتباط با انجمن';
      const message = form.querySelector('[name=message]').value.trim();
      if(!name || !email || !message){ form.querySelector('.notice').style.display='block'; form.querySelector('.notice').textContent='لطفاً نام، ایمیل و پیام را کامل کنید.'; return; }
      const body = `نام: ${name}\nایمیل: ${email}\n\n${message}`;
      window.location.href = `mailto:saeeiru@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    });
  }

  // Gentle parallax for ambient decorative layer.
  let ticking = false;
  window.addEventListener('pointermove', ev => {
    if(ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      const x = (ev.clientX / window.innerWidth - .5) * 8;
      const y = (ev.clientY / window.innerHeight - .5) * 8;
      document.documentElement.style.setProperty('--mx', `${x}px`);
      document.documentElement.style.setProperty('--my', `${y}px`);
      ticking = false;
    });
  }, {passive:true});
});
