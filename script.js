// Global variables
let currentTripType = "roundtrip";

// News data for carousel
const newsArticles = [
  {
    title: "Eva Air Ra Mắt Tuyến Bay Mới: TP.HCM - Sydney",
    date: "20 Thg 8, 2024",
    excerpt:
      "Eva Air hân hạnh thông báo ra mắt tuyến bay thẳng mới từ TP.HCM đến Sydney, Úc, bắt đầu từ ngày 1 tháng 10 năm 2024. Đặt vé ngay để nhận ưu đãi đặc biệt!",
    image:
      "https://media.istockphoto.com/id/183214684/photo/runway.jpg?s=612x612&w=0&k=20&c=X2JeeXo4QIIpRU--NcAd8jjzuP7WW5V7RRV263zd4fs=",
  },
  {
    title: "Ưu Đãi Đặc Biệt: Giảm Giá 30% Vé Thương Gia Đi Châu Âu",
    date: "15 Thg 8, 2024",
    excerpt:
      "Trải nghiệm dịch vụ đẳng cấp với vé hạng thương gia đi các thành phố lớn Châu Âu. Giảm ngay 30% khi đặt trước ngày 30 tháng 9.",
    image:
      "https://image.shutterstock.com/image-photo/great-rocky-walls-odle-dolomites-260nw-2120625833.jpg",
  },
  {
    title: "Eva Air Được VQAR Vinh Danh Hãng Hàng Không 5 Sao",
    date: "10 Thg 8, 2024",
    excerpt:
      "Chúng tôi tự hào thông báo Eva Air đã được Tổ chức Đánh giá Hàng không Quốc tế (VQAR) trao tặng danh hiệu Hãng Hàng Không 5 Sao về chất lượng dịch vụ.",
    image:
      "https://www.shutterstock.com/image-vector/golden-laurel-crown-text-realistic-260nw-2434171633.jpg",
  },
  {
    title: "Mẹo Du Lịch An Toàn Mùa Cao Điểm",
    date: "1 Thg 8, 2024",
    excerpt:
      "Bí quyết để có chuyến đi suôn sẻ và an toàn trong mùa du lịch cao điểm. Đừng bỏ lỡ những lời khuyên hữu ích từ Eva Air!",
    image:
      "https://static.fishingbooker.com/public/images/destination/baners/c9ea93a7b748ae3069e7257ecc6a61e6.jpg",
  },
  {
    title: "Khám Phá Đài Loan: Vùng Đất Của Những Điều Bất Ngờ",
    date: "25 Thg 7, 2024",
    excerpt:
      "Đài Loan không chỉ nổi tiếng với trà sữa và ẩm thực đường phố, mà còn có vô vàn cảnh đẹp và trải nghiệm văn hóa độc đáo đang chờ bạn khám phá.",
    image: "https://live.staticflickr.com/8259/8627416075_2393b6d3b3.jpg",
  },
  {
    title: "Chính Sách Hành Lý Mới Của Eva Air",
    date: "20 Thg 7, 2024",
    excerpt:
      "Cập nhật những thay đổi mới nhất về chính sách hành lý của Eva Air. Đảm bảo chuyến đi của bạn được thuận tiện nhất.",
    image: "https://www.shutterstock.com/shutterstock/videos/1039097177/thumb/8.jpg?ip=x480",
  },
];
// Airport data with Vietnamese names
const airports = [
  { code: "HAN", city: "Hà Nội", name: "Sân bay Nội Bài" },
  { code: "SGN", city: "TP.HCM", name: "Sân bay Tân Sơn Nhất" },
  { code: "DAD", city: "Đà Nẵng", name: "Sân bay Đà Nẵng" },
  { code: "CXR", city: "Nha Trang", name: "Sân bay Cam Ranh" },
  { code: "PQC", city: "Phú Quốc", name: "Sân bay Phú Quốc" },
  { code: "VCA", city: "Cần Thơ", name: "Sân bay Cần Thơ" },
  { code: "HUI", city: "Huế", name: "Sân bay Phú Bài" },
  { code: "DLI", city: "Đà Lạt", name: "Sân bay Liên Khương" },
  { code: "BMV", city: "Buôn Ma Thuột", name: "Sân bay Buôn Ma Thuột" },
  { code: "VDH", city: "Đông Hà", name: "Sân bay Đông Hà" },
  { code: "TBB", city: "Tuy Hòa", name: "Sân bay Tuy Hòa" },
  { code: "VCS", city: "Côn Đảo", name: "Sân bay Côn Đảo" },
  // International airports
  { code: "BKK", city: "Bangkok", name: "Suvarnabhumi Airport" },
  { code: "SIN", city: "Singapore", name: "Changi Airport" },
  { code: "KUL", city: "Kuala Lumpur", name: "KLIA" },
  { code: "NRT", city: "Tokyo", name: "Narita Airport" },
  { code: "ICN", city: "Seoul", name: "Incheon Airport" },
  { code: "HKG", city: "Hong Kong", name: "Hong Kong Airport" },
  { code: "TPE", city: "Taipei", name: "Taoyuan Airport" },
  { code: "CGK", city: "Jakarta", name: "Soekarno-Hatta" },
  { code: "MNL", city: "Manila", name: "Ninoy Aquino Airport" },
  { code: "DPS", city: "Bali", name: "Ngurah Rai Airport" },
  { code: "CDG", city: "Paris", name: "Charles de Gaulle" },
  { code: "LHR", city: "London", name: "Heathrow Airport" },
  { code: "DXB", city: "Dubai", name: "Dubai International" },
  { code: "SYD", city: "Sydney", name: "Kingsford Smith" },
  { code: "LAX", city: "Los Angeles", name: "LAX Airport" },
  { code: "JFK", city: "New York", name: "JFK Airport" },
];

// Utility functions
function formatAirport(airport) {
  return `${airport.city} (${airport.code})`;
}

function showNotification(title, message, isError = false) {
  const notification = document.getElementById("notification");
  const titleEl = document.getElementById("notification-title");
  const messageEl = document.getElementById("notification-message");

  titleEl.textContent = title;
  messageEl.textContent = message;

  notification.className = `notification show ${isError ? "error" : ""}`;

  setTimeout(() => {
    notification.classList.remove("show");
  }, 4000);
}

function showLoading() {
  document.getElementById("loading-overlay").classList.add("show");
}

function hideLoading() {
  document.getElementById("loading-overlay").classList.remove("show");
}

// Mobile menu functionality
document
  .getElementById("mobile-menu-btn")
  .addEventListener("click", function () {
    const navMenu = document.getElementById("nav-menu");
    navMenu.classList.toggle("show");
  });

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

// Autocomplete functionality
function setupAutocomplete(inputId, dropdownId) {
  const input = document.getElementById(inputId);
  const dropdown = document.getElementById(dropdownId);
  let selectedIndex = -1;

  input.addEventListener("input", function () {
    const value = this.value.toLowerCase();
    dropdown.innerHTML = "";
    selectedIndex = -1;

    if (value.length > 0) {
      const matches = airports
        .filter(
          (airport) =>
            airport.city.toLowerCase().includes(value) ||
            airport.code.toLowerCase().includes(value) ||
            airport.name.toLowerCase().includes(value)
        )
        .slice(0, 5); // Limit to 5 results

      if (matches.length > 0) {
        dropdown.style.display = "block";
        matches.forEach((airport, index) => {
          const item = document.createElement("div");
          item.className = "autocomplete-item";
          item.innerHTML = `
                                <strong>${airport.city} (${airport.code})</strong><br>
                                <small style="color: #666;">${airport.name}</small>
                            `;
          item.addEventListener("click", function () {
            input.value = formatAirport(airport);
            dropdown.style.display = "none";
          });
          dropdown.appendChild(item);
        });
      } else {
        dropdown.style.display = "none";
      }
    } else {
      dropdown.style.display = "none";
    }
  });

  input.addEventListener("keydown", function (e) {
    const items = dropdown.querySelectorAll(".autocomplete-item");

    if (e.key === "ArrowDown") {
      e.preventDefault();
      selectedIndex = Math.min(selectedIndex + 1, items.length - 1);
      updateSelection(items);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      selectedIndex = Math.max(selectedIndex - 1, -1);
      updateSelection(items);
    } else if (e.key === "Enter" && selectedIndex >= 0) {
      e.preventDefault();
      items[selectedIndex].click();
    } else if (e.key === "Escape") {
      dropdown.style.display = "none";
      selectedIndex = -1;
    }
  });

  function updateSelection(items) {
    items.forEach((item, index) => {
      item.classList.toggle("highlighted", index === selectedIndex);
    });
  }

  // Close dropdown when clicking outside
  document.addEventListener("click", function (e) {
    if (!input.contains(e.target) && !dropdown.contains(e.target)) {
      dropdown.style.display = "none";
    }
  });
}

// Initialize autocomplete
setupAutocomplete("from", "from-dropdown");
setupAutocomplete("to", "to-dropdown");

// Date validation
function initializeDateInputs() {
  const today = new Date();
  const todayString = today.toISOString().split("T")[0];
  const departureInput = document.getElementById("departure");
  const returnInput = document.getElementById("return");

  // Set minimum date to today
  departureInput.setAttribute("min", todayString);
  returnInput.setAttribute("min", todayString);

  // Update return date minimum when departure date changes
  departureInput.addEventListener("change", function () {
    const departureDate = new Date(this.value);
    const minReturnDate = new Date(departureDate);
    minReturnDate.setDate(minReturnDate.getDate() + 1);
    returnInput.setAttribute("min", minReturnDate.toISOString().split("T")[0]);

    // If return date is before new minimum, update it
    if (returnInput.value && new Date(returnInput.value) <= departureDate) {
      returnInput.value = minReturnDate.toISOString().split("T")[0];
    }
  });
}

initializeDateInputs();

// Form submission with enhanced feedback
document
  .getElementById("booking-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const btn = document.getElementById("search-btn");
    const fromValue = document.getElementById("from").value;
    const toValue = document.getElementById("to").value;
    const departureValue = document.getElementById("departure").value;
    const returnValue = document.getElementById("return").value;
    const passengersValue = document.getElementById("passengers").value;
    const classValue = document.getElementById("class").value;

    // Validation
    if (!fromValue || !toValue || !departureValue) {
      showNotification("Lỗi", "Vui lòng điền đầy đủ thông tin bắt buộc!", true);
      return;
    }

    if (currentTripType === "roundtrip" && !returnValue) {
      showNotification(
        "Lỗi",
        "Vui lòng chọn ngày về cho chuyến bay khứ hồi!",
        true
      );
      return;
    }

    if (fromValue === toValue) {
      showNotification(
        "Lỗi",
        "Điểm đi và điểm đến không được giống nhau!",
        true
      );
      return;
    }

    // Show loading
    showLoading();
    btn.classList.add("loading");
    btn.innerHTML = "⏳ Đang tìm kiếm...";
    btn.disabled = true;

    // Simulate API call
    setTimeout(() => {
      hideLoading();
      btn.classList.remove("loading");
      btn.innerHTML = "✅ Tìm thấy 24 chuyến bay!";
      btn.style.background = "linear-gradient(135deg, #28a745, #20c997)";

      showNotification(
        "Tìm kiếm thành công!",
        `Đã tìm thấy 24 chuyến bay từ ${fromValue} đến ${toValue}. Đang chuyển hướng...`
      );

      setTimeout(() => {
        btn.innerHTML = "🔍 Tìm chuyến bay";
        btn.style.background = "";
        btn.disabled = false;

        // In a real app, you would redirect to results page
        console.log("Search params:", {
          from: fromValue,
          to: toValue,
          departure: departureValue,
          return: returnValue,
          passengers: passengersValue,
          class: classValue,
          tripType: currentTripType,
        });
      }, 3000);
    }, 2000);
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
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  const currentScroll = window.pageYOffset;

  if (currentScroll > 100) {
    header.style.background =
      "linear-gradient(135deg, rgba(0,51,102,0.95) 0%, rgba(0,102,204,0.95) 100%)";
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
});

// Parallax effect for hero section
// window.addEventListener("scroll", () => {
//   const scrolled = window.pageYOffset;
//   const hero = document.querySelector(".hero");
//   const heroContent = document.querySelector(".hero-content");

//   if (scrolled < window.innerHeight) {
//     hero.style.transform = `translateY(${scrolled * 0.5}px)`;
//     heroContent.style.opacity = Math.max(0, 1 - scrolled * 0.001);
//   }
// });

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

  // Initialize form with default values
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);
  const nextWeek = new Date(today);
  nextWeek.setDate(nextWeek.getDate() + 7);

  document.getElementById("departure").value = tomorrow
    .toISOString()
    .split("T")[0];
  document.getElementById("return").value = nextWeek
    .toISOString()
    .split("T")[0];

  // Initialize carousel
  renderNewsCarousel();
});

// Destination cards click handler
document.querySelectorAll(".destination-card").forEach((card) => {
  card.addEventListener("click", function () {
    const destination = this.querySelector("h3").textContent;
    const price = this.querySelector(".price-tag").textContent;

    showNotification(
      "Điểm đến được chọn!",
      `${destination} - ${price}. Bạn có muốn tìm chuyến bay đến đây?`
    );

    // Auto-fill destination in booking form
    const cityName = destination.split(",")[0];
    const matchingAirport = airports.find((airport) =>
      airport.city.toLowerCase().includes(cityName.toLowerCase())
    );

    if (matchingAirport) {
      document.getElementById("to").value = formatAirport(matchingAirport);
      document.querySelector(".hero").scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Service items click handler
document.querySelectorAll(".service-item").forEach((item) => {
  item.addEventListener("click", function () {
    const serviceName = this.querySelector("h3").textContent;
    showNotification(
      "Dịch vụ được chọn!",
      `${serviceName} - Chức năng đang được phát triển.`
    );
  });
});

// News items click handler
document.querySelectorAll(".news-item").forEach((item) => {
  item.addEventListener("click", function () {
    const newsTitle = this.querySelector(".news-title").textContent;
    showNotification("Tin tức", `Đang mở: ${newsTitle}`);
  });
});

// Form enhancement: Auto-complete on tab/enter
document.querySelectorAll("#from, #to").forEach((input) => {
  input.addEventListener("blur", function () {
    const value = this.value.toLowerCase();
    if (value) {
      const match = airports.find(
        (airport) =>
          airport.city.toLowerCase().includes(value) ||
          airport.code.toLowerCase().includes(value)
      );

      if (match && this.value !== formatAirport(match)) {
        this.value = formatAirport(match);
      }
    }
  });
});

// Keyboard shortcuts
document.addEventListener("keydown", function (e) {
  // Ctrl/Cmd + K to focus search
  if ((e.ctrlKey || e.metaKey) && e.key === "k") {
    e.preventDefault();
    document.getElementById("from").focus();
  }

  // Escape to close dropdowns
  if (e.key === "Escape") {
    document.querySelectorAll(".autocomplete-dropdown").forEach((dropdown) => {
      dropdown.style.display = "none";
    });
    document.getElementById("nav-menu").classList.remove("show");
  }
});

// Error handling for network issues
window.addEventListener("online", () => {
  showNotification("Kết nối", "Đã kết nối lại internet");
});

window.addEventListener("offline", () => {
  showNotification("Mất kết nối", "Vui lòng kiểm tra kết nối internet", true);
});

// Analytics tracking (placeholder)
function trackEvent(category, action, label) {
  console.log("Analytics:", { category, action, label });
  // In real app: gtag('event', action, { category, label });
}

// Track form interactions
document.getElementById("booking-form").addEventListener("submit", () => {
  trackEvent("Booking", "Search", currentTripType);
});

document.querySelectorAll(".destination-card").forEach((card, index) => {
  card.addEventListener("click", () => {
    const destination = card.querySelector("h3").textContent;
    trackEvent("Destination", "Click", destination);
  });
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
                <div class="news-title">${article.title}</div>
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

    // Create pagination dot
    const dot = document.createElement("span");
    dot.classList.add("pagination-dot");
    dot.dataset.slideIndex = i;
    dot.addEventListener("click", () => {
      currentNewsSlide = i;
      updateNewsCarousel();
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
