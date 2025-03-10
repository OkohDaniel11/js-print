

//Function for popUp 

function togglePopup(overlayId, popupId, show = true) {
    const overlay = document.getElementById(overlayId);
    const popup = document.getElementById(popupId);
    
    if (overlay && popup) {
        overlay.style.display = show ? 'block' : 'none';
        popup.style.display = show ? 'block' : 'none';
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const overlay = document.getElementById('popupOverlay');
    if (overlay) {
        overlay.addEventListener('click', () => togglePopup('popupOverlay', 'popup', false));
        overlay.addEventListener('click', () => togglePopup('popupOverlay', 'aboutcontact-inner', false));
    }
});

// Usage:
function popUP() { togglePopup('popupOverlay', 'popup'); }
function closeX() { togglePopup('popupOverlay', 'popup', false); }
function contactClick() { togglePopup('popupOverlay', 'aboutcontact-inner'); }
function contactX() { togglePopup('popupOverlay', 'aboutcontact-inner', false); }


// Password Visibility/Univisible

function togglePassword(inputId, iconElement) {
    const input = document.getElementById(inputId);
    if (!input) return;

    input.type = input.type === "password" ? "text" : "password";
    iconElement.classList.toggle("fa-eye");
    iconElement.classList.toggle("fa-eye-slash");
}


//Mapping Search Queries

const searchMapping = {
    "fitness": "fitness.html",
    "health": "health.html",
    "health and Fitness": "fitness.html", 
    "growth": "growth.html",
    "faith": "faith.html",
    "god": "faith.html",
};

function handleSearch(event) {
    event.preventDefault(); 

    const query = document.getElementById("gsearch").value.toLowerCase().trim();
    const searchResults = searchMapping[query] || searchMapping[query.replace(/ and /g, " & ")];

    if (searchResults) {
        window.location.href = searchResults;
    } else {
        alert("No results found for your search. Please try again.");
    }
}


//toolbar functions on hompage js

function toggleDropdown(id) {
    let dropdown = document.getElementById(id);

    if (dropdown.style.display === "flex") {
        dropdown.style.display = "none";
    } else {
        dropdown.style.display = "flex";
    }
}


document.addEventListener("DOMContentLoaded", () => {
    const editor = document.getElementById("editor");

    // Remove placeholder text on first click
    editor.addEventListener("focus", function () {
        if (editor.innerHTML.trim() === "Start Writing here....") {
            editor.innerHTML = "";
        }
    });

    // Restore saved content if available
    const savedText = localStorage.getItem("blogContent");
    if (savedText) {
        editor.innerHTML = savedText;
    }
});


function formatText(command) {
    if (command === 'createLink') {
        let url = prompt("Enter the URL:", "https://");
        if (url) document.execCommand(command, false, url);
    } else {
        document.execCommand(command, false, null);
    }
}


//Save content when user clicks save

function saveContent() {
    localStorage.setItem('blogContent', document.getElementById('editor').innerHTML);
    alert("Content Saved!");
}


//When user clicks clear it will clear all written content
function clearContent() {
    document.getElementById('editor').innerHTML = "";
}

// Load saved content
document.addEventListener("DOMContentLoaded", () => {
    const savedText = localStorage.getItem('blogContent');
    if (savedText) {
        document.getElementById('editor').innerHTML = savedText;
    }
});


// Wait for the DOM to load slide animation content on about page 
document.addEventListener("DOMContentLoaded", function () {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        // Log the entry for debugging if needed
        console.log(entry);
        
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          // Optionally unobserve after showing
          observer.unobserve(entry.target);
        } else {
          // If you want the animation to repeat on scroll out/in, comment out the next line
          entry.target.classList.remove("show");
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    });
  
    // Select all elements with classes 'hidden' and 'delay'
    const hiddenElements = document.querySelectorAll('.hidden');
  
    hiddenElements.forEach((el) => observer.observe(el));
});


//Sort By Filter  dropdown

document.addEventListener('DOMContentLoaded', function () {
    // Get the dropdown element
    const filterDropdown = document.getElementById('filteration');
  
    // Check if the dropdown exists in the DOM
    if (filterDropdown) {
      // Add an event listener for dropdown selection changes
      filterDropdown.addEventListener('change', function () {
        const selectedValue = this.value; // Get the selected filter option
        const blogItems = document.querySelectorAll('.blog-item'); // Get all blog items
  
        if (selectedValue === 'A-Z') {
          // If sorting by A-Z is selected, sort blog items alphabetically
          const sortedItems = Array.from(blogItems).sort((a, b) => {
            const titleA = a.querySelector('h2').textContent.trim(); // Get title of first item
            const titleB = b.querySelector('h2').textContent.trim(); // Get title of second item
            return titleA.localeCompare(titleB); // Compare and sort alphabetically
          });
  
          // Get the blog list container and clear existing content
          const blogList = document.getElementById('blogslist');
          blogList.innerHTML = '';
  
          // Append sorted items back to the container
          sortedItems.forEach(item => blogList.appendChild(item));
        } else {
          // If a category is selected, filter blog items by category
          blogItems.forEach(item => {
            const itemCategory = item.getAttribute('data-category'); // Get category from data attribute
            
            // Show only the items that match the selected category, hide others
            item.style.display = (itemCategory === selectedValue) ? 'block' : 'none';
          });
        }
      });
    } else {
      // Log an error if the dropdown element is not found
      console.error('Filter dropdown element not found.');
    }
});

  
///Next page Fnction

document.addEventListener("DOMContentLoaded", function() {
    const pages = document.querySelectorAll('.page-number');
    const contentDiv = document.getElementById("blogslist");
    
    const pageContents = {
        1: ` <!-- Fitness & Health -->
                <div>
                    <article class="blog-item" data-category="Fitness">
                        <h2>🏋️‍♂️ The Best Morning Workouts for Maximum Energy</h2>
                        <p>
                            Start your day strong with quick, effective workouts 
                            that boost energy, improve mood, and enhance productivity.
                        </p>
                        <a href="#" class="read-more">Read More</a>
                    </article>
                    <article class="blog-item" data-category="Fitness">
                        <h2>🪑 How to Stay Fit While Working a Desk Job</h2>
                        <p>
                            Sitting all day? Learn simple exercises and 
                            habits to prevent stiffness, improve posture, 
                            and stay active.
                        </p>
                        <a href="#" class="read-more">Read More</a>
                    </article>
                    <article class="blog-item" data-category="Fitness">
                        <h2>
                            🍽️ Mindful Eating: Building a Healthy Relationship with Food
                        </h2>
                        <p>
                            Eating isn’t just about nutrition—it’s about mindfulness. 
                            Learn how to make better food choices without strict dieting.
                        </p>
                        <a href="#" class="read-more">Read More</a>
                    </article>
                </div>
                <!-- Lifestyle & Personal Growth -->
                <div>
                    <article class="blog-item" data-category="Lifestyle">
                        <h2>🌞 Building the Perfect Morning Routine for Success</h2>
                        <p>
                            Mornings set the tone for the day. Discover 
                            powerful habits to kickstart your day with 
                            energy, focus, and motivation.
                        </p>
                        <a href="#" class="read-more">Read More</a>
                    </article>
                    <article class="blog-item" data-category="Lifestyle">
                        <h2>🧘‍♂️ How to Declutter Your Life and Reduce Stress</h2>
                        <p>
                            Clutter—both physical and mental—can 
                            drain your energy. Learn how to simplify 
                            your space and mind for a more peaceful life.
                        </p>
                        <a href="#" class="read-more">Read More</a>
                    </article>
                    <article class="blog-item" data-category="Lifestyle">
                        <h2>🤝 The Power of Social Connections: Why Community Matters</h2>
                        <p>
                            Loneliness affects mental health. Find 
                            out how building strong relationships 
                            can bring happiness and purpose to your life.
                        </p>
                        <a href="#" class="read-more">Read More</a>
                    </article>
                </div>
                <!-- Religion & Spirituality -->
                <div>
                    <article class="blog-item" data-category="Religion">
                        <h2>🙏 The Power of Gratitude in Everyday Life</h2>
                        <p>
                            Practicing gratitude can change your mindset 
                            and improve your well-being. 
                            Learn simple ways to be more thankful every day.
                        </p>
                        <a href="#" class="read-more">
                            Read More
                        </a>
                    </article>
                    <article class="blog-item" data-category="Religion">
                        <h2>🕊️ Meditation and Prayer: Strengthening Your Spiritual Connection</h2>
                        <p>
                            Whether through meditation or prayer, 
                            quieting the mind can bring peace and clarity. 
                            Explore different practices to deepen your faith.
                        </p>
                        <a href="#" class="read-more">Read More</a>
                    </article>
                </div>`,
        2: ` <!-- Fitness & Health -->
        <div>
            <article class="blog-item" data-category="Fitness">
                <h2>🔥 Burn Fat Fast: Top Cardio Workouts for a Lean Physique</h2>
                <p>
                    Discover high-energy cardio routines that help you shed fat, boost endurance, and tone up quickly.
                </p>
                <a href="#" class="read-more">Read More</a>
            </article>
            <article class="blog-item" data-category="Fitness">
                <h2>💪 Strength Training 101: Getting Started With Weightlifting</h2>
                <p>
                    Learn the basics of weightlifting, including key exercises and techniques to build muscle safely.
                </p>
                <a href="#" class="read-more">Read More</a>
            </article>
            <article class="blog-item" data-category="Fitness">
                <h2>🧘 Flex and Flow: A Beginner’s Guide to Yoga for Health</h2>
                <p>
                    Explore yoga routines designed to improve flexibility, reduce stress, and enhance overall well-being.
                </p>
                <a href="#" class="read-more">Read More</a>
            </article>
        </div>
        <!-- Lifestyle & Personal Growth -->
        <div>
            <article class="blog-item" data-category="Lifestyle">
                <h2>🌿 Embrace Minimalism: Simplify Your Life for Greater Joy</h2>
                <p>
                    Uncover the benefits of a minimalist lifestyle and how decluttering your space can lead to inner peace.
                </p>
                <a href="#" class="read-more">Read More</a>
            </article>
            <article class="blog-item" data-category="Lifestyle">
                <h2>📵 Unplug to Recharge: Mastering the Digital Detox</h2>
                <p>
                    Learn practical tips for stepping away from screens, reducing stress, and reconnecting with yourself.
                </p>
                <a href="#" class="read-more">Read More</a>
            </article>
            <article class="blog-item" data-category="Lifestyle">
                <h2>📝 Journaling for Self-Discovery: Tips and Prompts</h2>
                <p>
                    Discover how daily journaling can unlock self-awareness and foster personal growth with creative prompts.
                </p>
                <a href="#" class="read-more">Read More</a>
            </article>
        </div>
        <!-- Religion & Spirituality -->
        <div>
            <article class="blog-item" data-category="Religion">
                <h2>🕉 Path to Inner Peace: Meditation Practices for Daily Life</h2>
                <p>
                    Explore various meditation techniques that can help calm your mind and bring balance to your daily routine.
                </p>
                <a href="#" class="read-more">Read More</a>
            </article>
            <article class="blog-item" data-category="Religion">
                <h2>✨ Finding Hope: Inspirational Stories of Spiritual Awakening</h2>
                <p>
                    Read uplifting stories of personal transformation and spiritual renewal to inspire your journey.
                </p>
                <a href="#" class="read-more">Read More</a>
            </article>
            <article class="blog-item" data-category="Religion">
                <h2>🙏 Daily Devotion: Cultivating a Ritual of Reflection</h2>
                <p>
                    Learn how establishing a daily ritual of prayer or reflection can nurture your spiritual well-being.
                </p>
                <a href="#" class="read-more">Read More</a>
            </article>
        </div>`,
        3: "<p>Page 3 Content</p>",
        4: "<p>Page 4 Content</p>",
    };

    pages.forEach(page => {
        page.addEventListener("click", function() {
            const selectedPage = this.getAttribute("data-page");

            //Update Content
            contentDiv.innerHTML = pageContents[selectedPage];

            //Update active class
            pages.forEach(p => p.classList.remove("active"));
            this.classList.add("active");
        });
    });
});
  

///Subscribe User Function

function subscribeUser() {
    let email = document.getElementById("newsLetteremail").value;

    if (email === "") {
        alert("Please enter a valid email address.");
        return;
    }

    fetch("subscribe.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert("Thank you for subscribing! Check your email.");
        } else {
            alert("Subscription failed. Please try again.");
        }
    })
    .catch(error => {
        console.error("Error:", error);
        alert("Something went wrong. Try again later.");
    });
}


//Adding grey over the div images in preview page

document.addEventListener("DOMContentLoaded", function () {
    const boxes = document.querySelectorAll(".slidBox, .boxesss, .rightBox, .leftBox, .lastlbox, .kin");

    boxes.forEach(box => {
        // Apply grayscale filter by default
        box.style.filter = "grayscale(100%)";
        box.style.transition = "filter 0.5s ease";
        box.style.cursor = "pointer"; // Set cursor to pointer

        // Remove grayscale on hover
        box.addEventListener("mouseover", function () {
            this.style.filter = "grayscale(0%)";
        });

        // Reapply grayscale when mouse leaves
        box.addEventListener("mouseout", function () {
            this.style.filter = "grayscale(100%)";
        });
    });
});

//Preview js 
// Select the slider container and the individual slides
const divSlideBox = document.querySelector('.divslidBox');
const slides = document.querySelectorAll('.slidBox');

// Initialize variables to track the current position
let currentIndex = 0;
const slideWidth = slides[0].offsetWidth; // Width of each slide
const totalSlides = slides.length; // Total number of slides

// Function to handle sliding
function slide(direction) {
    // Calculate new index based on the direction
    if (direction === 'left') {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : totalSlides - 1;
    } else if (direction === 'right') {
        currentIndex = (currentIndex < totalSlides - 1) ? currentIndex + 1 : 0;
    }

    // Update the transform property to slide to the correct position
    const translateX = -(currentIndex * slideWidth);
    divSlideBox.style.transform = `translateX(${translateX}px)`;
    divSlideBox.style.transition = 'transform 0.5s ease-in-out';
}

// Add click event listeners to the arrows
document.querySelector('.un').addEventListener('click', () => slide('left'));
document.querySelector('.do').addEventListener('click', () => slide('right'));



