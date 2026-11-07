const PROJECTS = [
  {
    id: 'walnut', title: 'The Courtyard Villa', note: '3BHK VILLA · TEAK · FAMILY LIVING', type: '3BHK VILLA CONCEPT', tagline: 'A home built around togetherness.',
    description: 'A full 3BHK villa direction shaped around the way an Indian family lives: a welcoming living room, an easy connection to dining, restful bedrooms and storage planned into the architecture. Warm wood and familiar craft details bring character without making the rooms feel formal.',
    image: 'https://images.unsplash.com/photo-1682662046457-74fd5b199b92?auto=format&fit=crop&w=1800&q=88',
    alt: 'Indian home living room in New Delhi with sofa, coffee table and a painting',
    gallery: ['https://images.unsplash.com/photo-1682662046457-74fd5b199b92?auto=format&fit=crop&w=1400&q=85','https://images.unsplash.com/photo-1577096807123-224044fa0339?auto=format&fit=crop&w=1400&q=85','https://images.unsplash.com/photo-1633605015660-b0f2dbad3bf2?auto=format&fit=crop&w=1400&q=85','https://images.unsplash.com/photo-1667375185256-9bf71ce75e15?auto=format&fit=crop&w=1400&q=85'],
    galleryLabels: ['LIVING ROOM', 'KITCHEN', 'MASTER BEDROOM', 'DINING']
  },
  {
    id: 'sage', title: 'The Everyday 3BHK', note: '3BHK HOME · OPEN LIVING · SMART STORAGE', type: '3BHK HOME CONCEPT', tagline: 'More room for everyday life.',
    description: 'A practical, warm 3BHK home with the shared spaces at its centre. The living and dining areas connect naturally, while the bedrooms stay private. The design considers Indian cooking, family routines, generous storage and the small moments that make a house feel like home.',
    image: 'https://images.unsplash.com/photo-1667375185256-9bf71ce75e15?auto=format&fit=crop&w=1800&q=88',
    alt: 'Residential living room in Chennai with a sofa and coffee table',
    gallery: ['https://images.unsplash.com/photo-1667375185256-9bf71ce75e15?auto=format&fit=crop&w=1400&q=85','https://images.unsplash.com/photo-1755771984341-546c2a04f236?auto=format&fit=crop&w=1400&q=85','https://images.unsplash.com/photo-1771328756144-02bde5549a9a?auto=format&fit=crop&w=1400&q=85','https://images.unsplash.com/photo-1682662046457-74fd5b199b92?auto=format&fit=crop&w=1400&q=85'],
    galleryLabels: ['LIVING & DINING', 'MODULAR KITCHEN', 'BEDROOM', 'FAMILY LOUNGE']
  },
  {
    id: 'clay', title: 'The Garden Edge Villa', note: '3BHK VILLA · TERRACOTTA · NATURAL LIGHT', type: '3BHK VILLA CONCEPT', tagline: 'A little more connection to the outdoors.',
    description: 'A villa concept that lets daylight and greenery shape the common areas. Living, dining and a garden-facing edge are treated as one generous family space; three bedrooms, useful storage and a hardworking kitchen complete the home.',
    image: 'https://images.unsplash.com/photo-1733547369416-75eb36fb8437?auto=format&fit=crop&w=1800&q=88',
    alt: 'Indian apartment interior in Agra with green walls and a white sofa',
    gallery: ['https://images.unsplash.com/photo-1733547369416-75eb36fb8437?auto=format&fit=crop&w=1400&q=85','https://images.unsplash.com/photo-1577096807123-224044fa0339?auto=format&fit=crop&w=1400&q=85','https://images.unsplash.com/photo-1633605015660-b0f2dbad3bf2?auto=format&fit=crop&w=1400&q=85','https://images.unsplash.com/photo-1667375185256-9bf71ce75e15?auto=format&fit=crop&w=1400&q=85'],
    galleryLabels: ['GARDEN-FACING LIVING', 'KITCHEN', 'BEDROOM', 'DINING']
  },
  {
    id: 'quiet', title: 'The Warm Modern Home', note: '3BHK INTERIORS · LIVING · DINING · BEDROOMS', type: '3BHK HOME CONCEPT', tagline: 'Familiar materials, a fresh point of view.',
    description: 'A complete home planned for real routines: a comfortable living room, a dining area close to the kitchen, three personal bedrooms and thoughtful storage. Earthy colours and Indian-made details keep the modern layout feeling rooted and welcoming.',
    image: 'https://images.unsplash.com/photo-1682662046457-74fd5b199b92?auto=format&fit=crop&w=1800&q=88',
    alt: 'Contemporary Indian living room with warm natural finishes',
    gallery: ['https://images.unsplash.com/photo-1682662046457-74fd5b199b92?auto=format&fit=crop&w=1400&q=85','https://images.unsplash.com/photo-1755771984341-546c2a04f236?auto=format&fit=crop&w=1400&q=85','https://images.unsplash.com/photo-1771328756144-02bde5549a9a?auto=format&fit=crop&w=1400&q=85','https://images.unsplash.com/photo-1733547369416-75eb36fb8437?auto=format&fit=crop&w=1400&q=85'],
    galleryLabels: ['LIVING ROOM', 'KITCHEN', 'BEDROOM', 'LOUNGE']
  },
  {
    id: 'window-poetry', title: 'The Family Living Room', note: 'GUESTS · TV WALL · EVERYDAY GATHERING', type: 'LIVING ROOM', tagline: 'A place for everyone to come together.',
    description: 'A living room concept for everyday family time and a full house on the weekend. We look at comfortable seating, a considered TV wall, flexible circulation, display and storage, and a clear connection to dining.',
    image: 'https://images.unsplash.com/photo-1682662046457-74fd5b199b92?auto=format&fit=crop&w=1400&q=85', alt: 'Indian living room with sofa seating and a statement wall',
    gallery: ['https://images.unsplash.com/photo-1682662046457-74fd5b199b92?auto=format&fit=crop&w=1400&q=85','https://images.unsplash.com/photo-1667375185256-9bf71ce75e15?auto=format&fit=crop&w=1400&q=85','https://images.unsplash.com/photo-1733547369416-75eb36fb8437?auto=format&fit=crop&w=1400&q=85','https://images.unsplash.com/photo-1577096807123-224044fa0339?auto=format&fit=crop&w=1400&q=85'], galleryLabels: ['SEATING', 'LIVING & DINING', 'A COLOUR STUDY', 'OPEN KITCHEN']
  },
  {
    id: 'arched-serenity', title: 'The Master Bedroom', note: 'WARDROBE · LAYERED LIGHT · QUIET CORNERS', type: 'BEDROOM', tagline: 'A calmer end to the day.',
    description: 'A comfortable master bedroom planned around rest and useful storage. Wardrobes, bedside lighting, a dressing area and clear movement around the bed are all considered as part of the room.',
    image: 'https://images.unsplash.com/photo-1633605015660-b0f2dbad3bf2?auto=format&fit=crop&w=1400&q=85', alt: 'Indian bedroom in Bengaluru with a bed and ceiling fan',
    gallery: ['https://images.unsplash.com/photo-1633605015660-b0f2dbad3bf2?auto=format&fit=crop&w=1400&q=85','https://images.unsplash.com/photo-1771328756144-02bde5549a9a?auto=format&fit=crop&w=1400&q=85','https://images.unsplash.com/photo-1682662046457-74fd5b199b92?auto=format&fit=crop&w=1400&q=85','https://images.unsplash.com/photo-1667375185256-9bf71ce75e15?auto=format&fit=crop&w=1400&q=85'], galleryLabels: ['MASTER BEDROOM', 'WARDROBE STUDY', 'HOME PALETTE', 'CONNECTED LIVING']
  },
  {
    id: 'plum-kitchen', title: 'A Bedroom to Grow', note: 'FLEXIBLE STORAGE · STUDY · REST', type: 'BEDROOM', tagline: 'Ready for the next chapter.',
    description: 'A second or children’s bedroom that can change with the family. A useful study surface, adaptable storage and a restful sleeping area fit together without making the room feel crowded.',
    image: 'https://images.unsplash.com/photo-1771328756144-02bde5549a9a?auto=format&fit=crop&w=1400&q=85', alt: 'Modern Indian bedroom with fitted wardrobe and bed in Pune',
    gallery: ['https://images.unsplash.com/photo-1771328756144-02bde5549a9a?auto=format&fit=crop&w=1400&q=85','https://images.unsplash.com/photo-1633605015660-b0f2dbad3bf2?auto=format&fit=crop&w=1400&q=85','https://images.unsplash.com/photo-1682662046457-74fd5b199b92?auto=format&fit=crop&w=1400&q=85','https://images.unsplash.com/photo-1733547369416-75eb36fb8437?auto=format&fit=crop&w=1400&q=85'], galleryLabels: ['BEDROOM', 'WARDROBE', 'HOME PALETTE', 'FAMILY LIVING']
  },
  {
    id: 'soft-rhythm', title: 'The Everyday Kitchen', note: 'INDIAN COOKING · MODULAR STORAGE · EASY CLEANUP', type: 'KITCHEN', tagline: 'Made for the everyday rhythm of home.',
    description: 'A kitchen shaped around the way Indian families cook: practical counter space, well-planned storage, easy-to-reach essentials and a clear path between sink, hob and prep. The layout can be adapted to a straight, L-shaped or U-shaped room.',
    image: 'https://images.unsplash.com/photo-1577096807123-224044fa0339?auto=format&fit=crop&w=1400&q=85', alt: 'Indian kitchen with brown cabinets in Mumbai',
    gallery: ['https://images.unsplash.com/photo-1577096807123-224044fa0339?auto=format&fit=crop&w=1400&q=85','https://images.unsplash.com/photo-1755771984341-546c2a04f236?auto=format&fit=crop&w=1400&q=85','https://images.unsplash.com/photo-1667375185256-9bf71ce75e15?auto=format&fit=crop&w=1400&q=85','https://images.unsplash.com/photo-1682662046457-74fd5b199b92?auto=format&fit=crop&w=1400&q=85'], galleryLabels: ['BROWN & WHITE KITCHEN', 'U-SHAPED LAYOUT', 'OPEN DINING', 'LIVING CONNECTION']
  },
  {
    id: 'daylight-study', title: 'The Family Dining Room', note: 'SHARED MEALS · OPEN PLAN · EXTRA SEATING', type: 'DINING ROOM', tagline: 'Space for one more at the table.',
    description: 'A dining space designed for regular family meals and celebrations. We consider table size, movement around chairs, storage for serveware and the relationship between the dining area, kitchen and living room.',
    image: 'https://images.unsplash.com/photo-1667375185256-9bf71ce75e15?auto=format&fit=crop&w=1400&q=85', alt: 'Indian home interior connecting living and dining areas',
    gallery: ['https://images.unsplash.com/photo-1667375185256-9bf71ce75e15?auto=format&fit=crop&w=1400&q=85','https://images.unsplash.com/photo-1682662046457-74fd5b199b92?auto=format&fit=crop&w=1400&q=85','https://images.unsplash.com/photo-1577096807123-224044fa0339?auto=format&fit=crop&w=1400&q=85','https://images.unsplash.com/photo-1733547369416-75eb36fb8437?auto=format&fit=crop&w=1400&q=85'], galleryLabels: ['DINING & LIVING', 'FAMILY SEATING', 'KITCHEN CONNECTION', 'A QUIETER PALETTE']
  },
  {
    id: 'woven-retreat', title: 'An Optional Pooja Nook', note: 'PERSONAL RITUAL · LIGHT · THOUGHTFUL PLACEMENT', type: 'FAMILY CORNER', tagline: 'A small space with personal meaning.',
    description: 'An optional, personal prayer corner planned to fit naturally into the home. The concept looks at a calm backdrop, discreet storage, practical lighting and a location that respects the family’s routines.',
    image: 'https://images.unsplash.com/photo-1733547369416-75eb36fb8437?auto=format&fit=crop&w=1400&q=85', alt: 'Calm Indian home interior with warm colour and natural light',
    gallery: ['https://images.unsplash.com/photo-1733547369416-75eb36fb8437?auto=format&fit=crop&w=1400&q=85','https://images.unsplash.com/photo-1682662046457-74fd5b199b92?auto=format&fit=crop&w=1400&q=85','https://images.unsplash.com/photo-1667375185256-9bf71ce75e15?auto=format&fit=crop&w=1400&q=85','https://images.unsplash.com/photo-1633605015660-b0f2dbad3bf2?auto=format&fit=crop&w=1400&q=85'], galleryLabels: ['QUIET CORNER', 'LIVING ROOM', 'OPEN HOME', 'PRIVATE ROOM']
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
  document.querySelector('#projectTagline').textContent = project.tagline;
  document.querySelector('#projectDescription').textContent = project.description;
  document.querySelector('#projectEnquiry').href = `contact/?project=${encodeURIComponent(project.id)}`;
  const gallery = document.querySelector('#projectGallery');
  project.gallery.forEach((image, index) => {
    const button = document.createElement('button');
    button.className = 'project-gallery-item';
    button.type = 'button';
    button.setAttribute('aria-label', `Enlarge ${project.title} concept image ${index + 1}`);
    button.style.backgroundImage = `url('${image}')`;
    button.innerHTML = `<span>${project.galleryLabels[index]}</span><b>↗</b>`;
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
