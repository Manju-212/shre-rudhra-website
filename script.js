const PROJECTS = [
  {
    id: 'walnut', title: 'The Walnut House', note: 'Walnut · Linen · Afternoon light', type: 'RESIDENCE CONCEPT',
    description: 'A study in warmth. Rich walnut gives the rooms their rhythm, while linen, soft curves and quiet pools of light bring a sense of ease. Every corner is imagined for the rituals of everyday living.',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1800&q=88',
    alt: 'Warm contemporary living room with natural wood and linen',
    gallery: [
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1400&q=85'
    ]
  },
  {
    id: 'sage', title: 'A Garden Within', note: 'Sage · Sunlight · Stillness', type: 'SLOW LIVING',
    description: 'An open, easy home shaped around the calming presence of green. Natural textures, filtered daylight and a few favourite objects make a gentle backdrop for everyday life.',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1800&q=88',
    alt: 'Light filled living room opening onto greenery',
    gallery: ['https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=85','https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1400&q=85','https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=85','https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1400&q=85']
  },
  {
    id: 'clay', title: 'Earth & Memory', note: 'Teak · Terracotta · Indian craft', type: 'MATERIAL STUDY',
    description: 'A contemporary home with a connection to its roots. Earthy tones, tactile stone and expressive craft bring depth and a sense of familiarity to the rooms.',
    image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1800&q=88',
    alt: 'Earthy modern interior with natural materials',
    gallery: ['https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1400&q=85','https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=85','https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=85','https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1400&q=85']
  },
  {
    id: 'quiet', title: 'The Quiet Edit', note: 'Ivory · Oak · Gentle contrast', type: 'A SOFTER EVERYDAY',
    description: 'A quiet palette gives shape to a home that feels composed but never cold. Oak, woven textures and soft contrast make room for both calm and character.',
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1800&q=88',
    alt: 'Calm neutral living room with oak details',
    gallery: ['https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1400&q=85','https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=85','https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=85','https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1400&q=85']
  },
  {
    id: 'window-poetry', title: 'Window Poetry', note: 'Daylight · Cotton · Quiet mornings', type: 'INDIVIDUAL SPACE',
    description: 'A reading corner and window seat become the heart of a small, light-filled retreat. Soft fabric and warm timber make the passing hours part of the design.',
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1400&q=85', alt: 'Sunlit interior with natural wood', gallery: ['https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1400&q=85','https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1400&q=85','https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=85','https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1400&q=85']
  },
  {
    id: 'arched-serenity', title: 'Arched Serenity', note: 'Limewash · Curves · Quiet warmth', type: 'INDIVIDUAL SPACE',
    description: 'Soft arches and gently textured walls give familiar forms a fresh point of view. A relaxed palette lets the architecture take the lead.',
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1400&q=85', alt: 'Sculptural forms in a calm neutral home', gallery: ['https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1400&q=85','https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1400&q=85','https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=85','https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1400&q=85']
  },
  {
    id: 'plum-kitchen', title: 'The Plum Kitchen', note: 'Deep plum · Brass · Gathering', type: 'INDIVIDUAL SPACE',
    description: 'A richly coloured kitchen designed to bring people together. Warm metal, generous surfaces and a considered layout keep it as practical as it is expressive.',
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1400&q=85', alt: 'Warm, material-led kitchen interior', gallery: ['https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1400&q=85','https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1400&q=85','https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=85','https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=85']
  },
  {
    id: 'soft-rhythm', title: 'Soft Rhythm', note: 'Texture · Balance · Ease', type: 'INDIVIDUAL SPACE',
    description: 'A layered living room built from quiet repetition: a repeated curve, a tactile weave, a warm natural tone. Subtle choices make the whole room feel settled.',
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1400&q=85', alt: 'Layered, warm modern living room', gallery: ['https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1400&q=85','https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1400&q=85','https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=85','https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1400&q=85']
  },
  {
    id: 'daylight-study', title: 'Daylight Study', note: 'Natural light · Stone · Calm', type: 'INDIVIDUAL SPACE',
    description: 'A simple study of how daylight changes a room. Natural stone and restrained forms offer a quiet canvas for work, thought and pause.',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=85', alt: 'Daylit room with thoughtful materials', gallery: ['https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=85','https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=85','https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1400&q=85','https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1400&q=85']
  },
  {
    id: 'woven-retreat', title: 'Woven Retreat', note: 'Rattan · Linen · Pause', type: 'INDIVIDUAL SPACE',
    description: 'Woven details, natural fibres and a gentle palette turn a bedroom into a place to slow down. A thoughtful retreat for the end of each day.',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=85', alt: 'Quiet bedroom with natural textures', gallery: ['https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=85','https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1400&q=85','https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=85','https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1400&q=85']
  }
];

const WHATSAPP_NUMBER = '918121162266';

// Shared mobile navigation
const menuToggle = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('.mobile-menu');
function setMenu(open) {
  if (!menuToggle || !mobileMenu) return;
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  mobileMenu.classList.toggle('open', open);
  mobileMenu.setAttribute('aria-hidden', String(!open));
  document.body.classList.toggle('menu-open', open);
  if (!open) menuToggle.focus();
}
menuToggle?.addEventListener('click', () => {
  const opening = menuToggle.getAttribute('aria-expanded') !== 'true';
  setMenu(opening);
  if (opening) mobileMenu.querySelector('.menu-close')?.focus();
});
mobileMenu?.querySelectorAll('[data-menu-close]').forEach(button => button.addEventListener('click', () => setMenu(false)));
mobileMenu?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => setMenu(false)));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && mobileMenu?.classList.contains('open')) setMenu(false);
  if (event.key === 'Tab' && mobileMenu?.classList.contains('open')) {
    const focusable = [...mobileMenu.querySelectorAll('a[href],button:not([disabled])')].filter(element => element.tabIndex >= 0);
    const first = focusable[0];
    const last = focusable.at(-1);
    if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
    else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
  }
});

// Home hero carousel
const heroImage = document.querySelector('#heroImage');
if (heroImage) {
  const featuredProjects = PROJECTS.slice(0, 4);
  let currentSlide = 0;
  const showSlide = index => {
    currentSlide = (index + featuredProjects.length) % featuredProjects.length;
    const project = featuredProjects[currentSlide];
    heroImage.style.backgroundImage = `url('${project.image}')`;
    heroImage.setAttribute('aria-label', project.alt);
    document.querySelector('#slideTitle').textContent = project.title;
    document.querySelector('#slideNote').textContent = project.note;
    document.querySelector('#slideNumber').textContent = String(currentSlide + 1).padStart(2, '0');
  };
  document.querySelector('#prevSlide')?.addEventListener('click', () => showSlide(currentSlide - 1));
  document.querySelector('#nextSlide')?.addEventListener('click', () => showSlide(currentSlide + 1));
}

// Spaces collection: update the feature panel and its accessible selectors.
const featureImage = document.querySelector('#spaceFeatureImage');
if (featureImage) {
  const featuredProjects = PROJECTS.slice(0, 4);
  let selectedIndex = 0;
  const choices = [...document.querySelectorAll('[data-space-choice]')];
  const selectSpace = index => {
    selectedIndex = (index + featuredProjects.length) % featuredProjects.length;
    const project = featuredProjects[selectedIndex];
    featureImage.style.backgroundImage = `url('${project.image}')`;
    featureImage.setAttribute('aria-label', project.alt);
    document.querySelector('#spaceType').textContent = project.type;
    document.querySelector('#spaceTitle').textContent = project.title;
    document.querySelector('#spaceNote').textContent = project.note;
    document.querySelector('#spaceLink').href = `project.html?id=${project.id}`;
    choices.forEach((button, choiceIndex) => {
      button.setAttribute('aria-pressed', String(choiceIndex === selectedIndex));
      button.classList.toggle('is-active', choiceIndex === selectedIndex);
    });
  };
  choices.forEach((button, index) => button.addEventListener('click', () => selectSpace(index)));
  document.querySelector('#spacePrevious')?.addEventListener('click', () => selectSpace(selectedIndex - 1));
  document.querySelector('#spaceNext')?.addEventListener('click', () => selectSpace(selectedIndex + 1));
  selectSpace(0);
}

const roomGrid = document.querySelector('#roomGrid');
if (roomGrid) {
  PROJECTS.slice(4).forEach(project => {
    const card = document.createElement('a');
    card.className = 'room-card';
    card.href = `project.html?id=${project.id}`;
    card.setAttribute('aria-label', `Explore ${project.title}`);
    card.innerHTML = `<div class="room-card-image" role="img" aria-label="${project.alt}" style="background-image:url('${project.image}')"></div><div class="room-card-meta"><div><span class="project-type">${project.type}</span><h3>${project.title}</h3><p>${project.note}</p></div><b aria-hidden="true">↗</b></div>`;
    roomGrid.append(card);
  });
}

// Individual project page and image viewer
const projectTitle = document.querySelector('#projectTitle');
if (projectTitle) {
  const query = new URLSearchParams(window.location.search);
  const project = PROJECTS.find(item => item.id === query.get('id')) || PROJECTS[0];
  document.title = `${project.title} — Shree Rudra Spaces`;
  document.querySelector('#projectHeroImage').style.backgroundImage = `url('${project.image}')`;
  document.querySelector('#projectHeroImage').setAttribute('aria-label', project.alt);
  projectTitle.textContent = project.title;
  document.querySelector('#projectType').textContent = project.type;
  document.querySelector('#projectNote').textContent = project.note;
  document.querySelector('#projectDescription').textContent = project.description;
  document.querySelector('#projectEnquiry').href = `contact/?project=${encodeURIComponent(project.id)}`;
  const gallery = document.querySelector('#projectGallery');
  project.gallery.forEach((image, index) => {
    const button = document.createElement('button');
    button.className = 'project-gallery-item';
    button.type = 'button';
    button.setAttribute('aria-label', `Enlarge ${project.title} concept image ${index + 1}`);
    button.style.backgroundImage = `url('${image}')`;
    button.innerHTML = `<span>${['LIVING', 'DINING', 'BEDROOM', 'DETAIL'][index]}</span><b>↗</b>`;
    button.addEventListener('click', () => {
      const dialog = document.querySelector('#imageDialog');
      const lightboxImage = document.querySelector('#lightboxImage');
      lightboxImage.src = image;
      lightboxImage.alt = `${project.title} concept image ${index + 1}`;
      dialog.showModal();
    });
    gallery.append(button);
  });
  const dialog = document.querySelector('#imageDialog');
  document.querySelector('#closeImageDialog')?.addEventListener('click', () => dialog.close());
  dialog?.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });
}

// Contact enquiry: compose a message for the visitor's chosen app; no details are stored.
const enquiryForm = document.querySelector('#enquiryForm');
if (enquiryForm) {
  const conversationSelect = document.querySelector('#conversation');
  const replyLabel = document.querySelector('#replyLabel');
  const submitLabel = document.querySelector('#submitLabel');
  const status = document.querySelector('#formStatus');
  const updateConversation = () => {
    const useEmail = conversationSelect.value === 'email';
    replyLabel.textContent = useEmail ? 'Your email address' : 'Your phone number';
    document.querySelector('#replyTo').type = useEmail ? 'email' : 'tel';
    document.querySelector('#replyTo').autocomplete = useEmail ? 'email' : 'tel';
    document.querySelector('#replyTo').placeholder = useEmail ? 'you@example.com' : '+91 00000 00000';
    document.querySelector('#replyTo').required = true;
    submitLabel.textContent = useEmail ? 'Continue to email' : 'Continue to WhatsApp';
  };
  conversationSelect.addEventListener('change', updateConversation);
  const buildEnquiry = () => {
    const values = new FormData(enquiryForm);
    const labels = [
      ['Name', values.get('name')], ['Preferred reply', values.get('replyTo')],
      ['Project location', values.get('location')], ['Property type', values.get('property')],
      ['Approximate area', values.get('area')], ['Budget range', values.get('budget')],
      ['Timeline', values.get('timeline')], ['About the space', values.get('message')]
    ];
    return `Hello Shree Rudra Spaces, I would like to discuss an interior project.\n\n${labels.filter(([, value]) => value).map(([label, value]) => `${label}: ${value}`).join('\n')}`;
  };
  enquiryForm.addEventListener('submit', event => {
    event.preventDefault();
    const body = buildEnquiry();
    if (conversationSelect.value === 'email') {
      window.location.href = `mailto:Studio@shreerudraspaces.com?subject=${encodeURIComponent('Interior design enquiry')}&body=${encodeURIComponent(body)}`;
    } else {
      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(body)}`, '_blank', 'noopener,noreferrer');
    }
    status.textContent = 'Your message is ready in your chosen app. Review it there before sending.';
  });
  document.querySelector('#copyEnquiry')?.addEventListener('click', async () => {
    if (!enquiryForm.reportValidity()) return;
    try {
      await navigator.clipboard.writeText(buildEnquiry());
      status.textContent = 'Enquiry copied. You can paste it into WhatsApp or email.';
    } catch {
      status.textContent = 'Copy is unavailable here. Use Continue to open your chosen app instead.';
    }
  });
  const projectParam = new URLSearchParams(window.location.search).get('project');
  const project = PROJECTS.find(item => item.id === projectParam);
  if (project) document.querySelector('#message').value = `I loved ${project.title} and would like to discuss my home interiors.`;
  updateConversation();
}
