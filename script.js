const newsArticles = [
  {
    title:
      "Eva Air Ra Mắt Tuyến Bay Mới: TP.HCM - Sydney với Ưu Đãi Vé Máy Bay Eva Air",
    date: "20 Thg 8, 2024",
    excerpt:
      "Eva Air hân hạnh thông báo ra mắt tuyến bay thẳng mới từ TP.HCM đến Sydney, Úc, bắt đầu từ ngày 1 tháng 10 năm 2024. Đặt vé máy bay Eva Air ngay để nhận ưu đãi đặc biệt!",
    image:
      "https://res.cloudinary.com/dyp4yk66w/image/upload/v1763347301/runway_xhi8bc.jpg",
  },
  {
    title:
      "Ưu Đãi Đặc Biệt: Giảm Giá 30% Vé Thương Gia Chuyến Bay Eva Air Đi Châu Âu",
    date: "15 Thg 8, 2024",
    excerpt:
      "Trải nghiệm dịch vụ đẳng cấp với vé hạng thương gia đi các thành phố lớn Châu Âu trên chuyến bay Eva Air. Giảm ngay 30% khi đặt trước ngày 30 tháng 9.",
    image:
      "https://res.cloudinary.com/dyp4yk66w/image/upload/deal-euro_gr3nsk.jpg",
  },
  {
    title:
      "Eva Air Được Vinh Danh Hãng Hàng Không 5 Sao về Chất Lượng Dịch Vụ Bay",
    date: "10 Thg 8, 2024",
    excerpt:
      "Chúng tôi tự hào thông báo Eva Air đã được Tổ chức Đánh giá Hàng không Quốc tế (VQAR) trao tặng danh hiệu Hãng Hàng Không 5 Sao về chất lượng dịch vụ các chuyến bay của Eva Air.",
    image:
      "https://res.cloudinary.com/dyp4yk66w/image/upload/v1763347263/award_adcshs.jpg",
  },
  {
    title: "Mẹo Du Lịch An Toàn Mùa Cao Điểm Cùng Eva Air",
    date: "1 Thg 8, 2024",
    excerpt:
      "Bí quyết để có chuyến đi suôn sẻ và an toàn trong mùa du lịch cao điểm. Đừng bỏ lỡ những lời khuyên hữu ích từ Eva Air để kiểm tra chuyến bay của bạn!",
    image:
      "https://res.cloudinary.com/dyp4yk66w/image/upload/v1763347247/travel_trwecg.jpg",
  },
  {
    title: "Khám Phá Đài Loan với Vé Máy Bay Eva Air Giá Rẻ",
    date: "25 Thg 7, 2024",
    excerpt:
      "Đài Loan không chỉ nổi tiếng với trà sữa và ẩm thực đường phố, mà còn có vô vàn cảnh đẹp và trải nghiệm văn hóa độc đáo đang chờ bạn khám phá. Tìm vé máy bay Eva Air đi Đài Loan ngay!",
    image: "https://res.cloudinary.com/dyp4yk66w/image/upload/v1763347219/eva-air/taiwan_ec3kmq.jpg",
  },
  {
    title: "Chính Sách Hành Lý Mới Nhất Của Hãng Hàng Không Eva Air",
    date: "20 Thg 7, 2024",
    excerpt:
      "Cập nhật những thay đổi mới nhất về chính sách hành lý của Eva Air. Đảm bảo chuyến đi của bạn được thuận tiện nhất với hãng hàng không Eva Air.",
    image:
      "https://res.cloudinary.com/dyp4yk66w/image/upload/v1763347186/eva-air/policy_xtrh0z.jpg",
  },
];

// Utility functions
function showLoading() {
  document.getElementById("loading-overlay").classList.add("show");
}

function hideLoading() {
  document.getElementById("loading-overlay").classList.remove("show");
}

// Mobile menu functionality (single initializer with transitions so close also animates)
const mobileBtn = document.getElementById("mobile-menu-btn");
const navMenu = document.getElementById("nav-menu");
if (mobileBtn && navMenu) {
  // Ensure a transition is present so both adding and removing `.show` animate
  navMenu.style.transition =
    "max-height 320ms ease, transform 300ms cubic-bezier(.2,.9,.2,1), opacity 200ms ease";

  mobileBtn.addEventListener("click", function () {
    const expanded = this.getAttribute("aria-expanded") === "true";
    if (!expanded) {
      navMenu.classList.add("show");
      this.setAttribute("aria-expanded", "true");
      this.setAttribute("aria-label", "Đóng menu");
    } else {
      // removing the class will animate the close because transition is set above
      navMenu.classList.remove("show");
      this.setAttribute("aria-expanded", "false");
      this.setAttribute("aria-label", "Mở menu điều hướng");
    }
  });
}

// Tab switching functionality
function switchTab(element, type) {
  currentTripType = type;

  // Remove active class from all tabs
  document.querySelectorAll(".tab").forEach((tab) => {
    tab.classList.remove("active");
  });

  // Add active class to clicked tab
  element.classList.add("active");

  // Show/hide return date based on trip type
  const returnDate = document.getElementById("return-date");
  const returnInput = document.getElementById("return");

  if (type === "oneway") {
    returnDate.style.display = "none";
    returnInput.removeAttribute("required");
  } else {
    returnDate.style.display = "block";
    returnInput.setAttribute("required", "");
  }
}

// Initialize tab functionality
document.querySelectorAll(".tab").forEach((tab) => {
  tab.addEventListener("click", function () {
    switchTab(this, this.dataset.type);
  });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const href = this.getAttribute("href");
    if (href !== "#") {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        const headerHeight = 80;
        const targetPosition =
          target.getBoundingClientRect().top +
          window.pageYOffset -
          headerHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });

        // Close mobile menu if open
        document.getElementById("nav-menu").classList.remove("show");
      }
    }
  });
});

// Header scroll effects
let lastScroll = 0;
// Improve scroll handling: use passive listener and rAF to avoid layout thrash
(function () {
  const header = document.querySelector("header");
  let ticking = false;

  function onScroll() {
    const currentScroll = window.pageYOffset;

    if (!ticking) {
      window.requestAnimationFrame(function () {
        if (currentScroll > 100) {
          // header.style.background =
          header.style.backdropFilter = "blur(20px)";
        } else {
          header.style.background = "";
          header.style.backdropFilter = "";
        }

        // Hide/show header on scroll (optional)
        if (currentScroll > lastScroll && currentScroll > 200) {
          header.style.transform = "translateY(-100%)";
        } else {
          header.style.transform = "translateY(0)";
        }

        lastScroll = currentScroll;
        ticking = false;
      });
      ticking = true;
    }
  }

  // Use passive listener to improve scroll performance
  window.addEventListener("scroll", onScroll, { passive: true });
})();

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver(function (entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.animation = "fadeInUp 0.6s ease forwards";
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe elements for animation
function observeElements() {
  const elements = document.querySelectorAll(
    ".feature-card, .destination-card, .service-item, .news-item"
  );
  elements.forEach((el) => {
    el.style.opacity = "0";
    observer.observe(el);
  });
}

// Page load initialization
window.addEventListener("load", () => {
  // Fade in body
  document.body.style.opacity = "0";
  document.body.style.transition = "opacity 0.5s ease";
  setTimeout(() => {
    document.body.style.opacity = "1";
  }, 100);

  // Initialize animations
  setTimeout(observeElements, 500);
  renderNewsCarousel();
});

// News Carousel Functionality
const newsCarouselTrack = document.getElementById("news-carousel-track");
const newsCarouselPrevBtn = document.getElementById("news-carousel-prev");
const newsCarouselNextBtn = document.getElementById("news-carousel-next");
const newsCarouselPagination = document.getElementById(
  "news-carousel-pagination"
);

let currentNewsSlide = 0;
let newsItemsPerSlide = 3; // Default for desktop

function createNewsItemHTML(article) {
  return `
        <div class="news-item">
            <div class="news-image" style="background: url(${article.image});"></div>
            <div class="news-content">
                <div class="news-date">${article.date}</div>
                <h3 class="news-title">${article.title}</h3>
                <div class="news-excerpt">${article.excerpt}</div>
            </div>
        </div>
    `;
}

function renderNewsCarousel() {
  newsCarouselTrack.innerHTML = "";
  newsCarouselPagination.innerHTML = "";

  const totalSlides = Math.ceil(newsArticles.length / newsItemsPerSlide);

  for (let i = 0; i < totalSlides; i++) {
    const slide = document.createElement("div");
    slide.classList.add("news-slide");

    const start = i * newsItemsPerSlide;
    const end = start + newsItemsPerSlide;
    const articlesForSlide = newsArticles.slice(start, end);

    articlesForSlide.forEach((article) => {
      slide.innerHTML += createNewsItemHTML(article);
    });
    newsCarouselTrack.appendChild(slide);

    // Create pagination dot (accessible)
    const dot = document.createElement("button");
    dot.classList.add("pagination-dot");
    dot.setAttribute("role", "tab");
    dot.setAttribute("aria-selected", "false");
    dot.setAttribute("tabindex", "-1");
    dot.dataset.slideIndex = i;
    dot.addEventListener("click", () => {
      currentNewsSlide = i;
      updateNewsCarousel();
    });
    dot.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        currentNewsSlide = i;
        updateNewsCarousel();
      }
    });
    newsCarouselPagination.appendChild(dot);
  }
  updateNewsCarousel();
}

function updateNewsCarousel() {
  const offset = -currentNewsSlide * 100;
  newsCarouselTrack.style.transform = `translateX(${offset}%)`;

  // Update active pagination dot
  document.querySelectorAll(".pagination-dot").forEach((dot, index) => {
    if (index === currentNewsSlide) {
      dot.classList.add("active");
    } else {
      dot.classList.remove("active");
    }
  });

  // Enable/disable buttons
  newsCarouselPrevBtn.disabled = currentNewsSlide === 0;
  newsCarouselNextBtn.disabled =
    currentNewsSlide === newsCarouselTrack.children.length - 1;
}

// Navigation buttons event listeners
newsCarouselPrevBtn.addEventListener("click", () => {
  if (currentNewsSlide > 0) {
    currentNewsSlide--;
    updateNewsCarousel();
  }
});

newsCarouselNextBtn.addEventListener("click", () => {
  if (currentNewsSlide < newsCarouselTrack.children.length - 1) {
    currentNewsSlide++;
    updateNewsCarousel();
  }
});

// Responsive adjustment for news items per slide
function adjustNewsItemsPerSlide() {
  if (window.innerWidth <= 768) {
    newsItemsPerSlide = 1; // 1 item per slide on mobile
  } else {
    newsItemsPerSlide = 3; // 3 items per slide on desktop
  }
  currentNewsSlide = 0; // Reset to first slide on resize
  renderNewsCarousel();
}

// Initialize carousel on load and on resize
window.addEventListener("load", () => {
  adjustNewsItemsPerSlide();
});
window.addEventListener("resize", adjustNewsItemsPerSlide);

// Back to top button functionality
const backToTopBtn = document.getElementById("back-to-top");
function checkScrollForBackToTop() {
  if (!backToTopBtn) return;
  if (window.pageYOffset > 400) {
    backToTopBtn.classList.add("show");
  } else {
    backToTopBtn.classList.remove("show");
  }
}

window.addEventListener("scroll", checkScrollForBackToTop);
window.addEventListener("load", checkScrollForBackToTop);

if (backToTopBtn) {
  backToTopBtn.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  backToTopBtn.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  });
}

// FAQ Accordion functionality
document.querySelectorAll(".faq-question").forEach((button) => {
  button.addEventListener("click", () => {
    const faqItem = button.parentNode;
    const faqAnswer = button.nextElementSibling;

    // Close all other open FAQ items
    document.querySelectorAll(".faq-item").forEach((item) => {
      if (item !== faqItem) {
        item.querySelector(".faq-question").classList.remove("active");
        item.querySelector(".faq-answer").classList.remove("show");
      }
    });

    // Toggle the clicked FAQ item
    button.classList.toggle("active");
    faqAnswer.classList.toggle("show");
  });
});

// FAQ Show More functionality
document.getElementById("show-more-faq").addEventListener("click", function () {
  const hiddenFAQs = document.getElementById("hidden-faqs");
  const button = document.getElementById("show-more-faq");

  if (hiddenFAQs.classList.contains("show")) {
    hiddenFAQs.classList.remove("show");
    button.textContent = "Xem thêm câu hỏi";
    // Scroll to FAQ section
    document.getElementById("faq").scrollIntoView({ behavior: "smooth" });
  } else {
    hiddenFAQs.classList.add("show");
    button.textContent = "Thu gọn";
  }
});
// Existing FAQ toggle functionality
// document.querySelectorAll(".faq-question").forEach((button) => {
//   button.addEventListener("click", () => {
//     const answer = button.nextElementSibling;
//     button.classList.toggle("active");
//     answer.style.maxHeight = button.classList.contains("active")
//       ? answer.scrollHeight + "px"
//       : 0;
//   });
// });
const contactToggle = document.getElementById("contactToggle");
const contactList = document.getElementById("contactList");
let isContactOpen = true;

contactToggle.addEventListener("click", () => {
  isContactOpen = !isContactOpen;
  if (isContactOpen) {
    contactList.classList.add("show");
    contactToggle.innerHTML = '<i class="fa-solid fa-xmark"></i>';
  } else {
    contactList.classList.remove("show");
    contactToggle.innerHTML = '<i class="fa-solid fa-comments"></i>';
  }
});

// // Close contact buttons when clicking outside
// document.addEventListener("click", (e) => {
//   if (!e.target.closest(".contact-buttons") && isContactOpen) {
//     contactList.classList.remove("show");
//     contactToggle.innerHTML = '<i class="fa-solid fa-comments"></i>';
//     isContactOpen = false;
//   }
// });
