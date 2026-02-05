// Get all FAQ sections
const faqs = document.querySelectorAll('.faq1, .faq2, .faq3, .faq4');

// Add click event to each FAQ
faqs.forEach(faq => {
  const heading = faq.querySelector('h2');
  const content = faq.querySelector('p');
  const icon = faq.querySelector('.icon');
  
  // Hide all paragraphs initially
  content.style.display = 'none';

  // On small screens, open the first FAQ by default
  if (window.innerWidth <= 480 && faq === faqs[0]) {
    content.style.display = 'block';
    icon.textContent = '−';
    icon.classList.add('open');
  }
  
  // Only toggle when the icon is clicked
  icon.addEventListener('click', (e) => {
    e.stopPropagation();
    const isOpen = content.style.display === 'block';

    // Close all FAQs
    faqs.forEach(item => {
      item.querySelector('p').style.display = 'none';
      const itIcon = item.querySelector('.icon');
      itIcon.textContent = '+';
      itIcon.classList.remove('open');
    });

    // Toggle clicked FAQ
    if (!isOpen) {
      content.style.display = 'block';
      icon.textContent = '−';
      icon.classList.add('open');
    } else {
      content.style.display = 'none';
      icon.textContent = '+';
      icon.classList.remove('open');
    }
  });
});