# Coming Soon Page for Innovate Engineering Institute

A modern, responsive, and professional "Coming Soon" or "Under Development" page designed for an engineering institute. It features a dynamic countdown timer and an email subscription form to capture user interest before the official website launch.

_(Note: You should replace this with an actual screenshot of your page)_

---

## ✨ Features

- **Modern Design**: A clean and professional look suitable for an academic or technical institution.
- **Dynamic Countdown Timer**: Shows the remaining days, hours, minutes, and seconds until the launch date.
- **Email Subscription Form**: Allows visitors to subscribe for launch notifications.
- **Responsive Layout**: Looks great on all devices, from mobile phones to desktop computers.
- **Customizable Background**: Uses a high-quality background image with an overlay for text readability.
- **Easy Configuration**: The launch date can be easily changed in the JavaScript file.

---

## 🛠️ Technologies Used

- **HTML5**: For the structure and content of the page.
- **CSS3**: For styling, layout, and responsiveness. Includes Google Fonts for modern typography.
- **JavaScript (ES6)**: For the countdown timer logic.

---

## 🚀 Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

You only need a modern web browser (like Chrome, Firefox, or Edge).

### Installation

1. Clone the repository or download the files to your local machine.
   ```sh
   git clone https://github.com/your-username/your-repository-name.git
   ```
2. Navigate to the project directory.
3. Open the `index.html` file in your web browser.

---

## 🔧 Customization

### 1. Set the Launch Date

Open the `script.js` file and modify the `launchDate` constant to your desired launch time.

```javascript
// Set the date for the launch (Year, Month (0-11), Day, Hour, Minute, Second)
const launchDate = new Date(2024, 11, 31, 23, 59, 59).getTime();
```

### 2. Change the Logo

In `index.html`, uncomment the `<img>` tag and replace `logo.png` with the path to your institute's logo file.

```html
<img src="path/to/your/logo.png" alt="Institute Logo" class="logo" />
```

---

## 📂 File Structure

```
├── index.html      # The main HTML file
├── style.css       # All styles for the page
├── script.js       # Logic for the countdown timer
└── README.md       # This file
```

---

## 📄 License

This project is open source and available under the MIT License.

---

## 🙏 Credits

- Background Image from Unsplash.
- Font from Google Fonts.
