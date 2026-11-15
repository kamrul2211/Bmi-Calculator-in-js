<img width="1920" height="827" alt="image" src="https://github.com/user-attachments/assets/b5c3ef64-0979-49ca-8609-801c6f143f81" />
# ⚖️ BMI Calculator

A simple, responsive, and user-friendly BMI (Body Mass Index) Calculator built using HTML, CSS, Bootstrap, and Vanilla JavaScript.

Calculate your BMI by entering your weight and height, and instantly view your corresponding BMI category.

## 🚀 Live Demo

[View Live Demo](#)

## ✨ Features

- 📊 Calculate BMI using weight and height.
- ⚖️ Accurate BMI calculation with height conversion (cm to metres).
- ✅ Input validation for empty and invalid fields.
- 🔄 Automatically clear previous results when inputs change.
- ⏱️ Timed validation messages.
- 📱 Responsive layout for different screen sizes.
- 🎨 Modern UI with gradient backgrounds and clean styling.
- 💡 Informational section explaining BMI.

## 🛠️ Technologies Used

- **HTML5** – Page structure and input elements.
- **CSS3** – Custom styling, gradients, and responsive design.
- **Bootstrap 5** – Layout and UI components.
- **JavaScript** – BMI calculations, DOM manipulation, event listeners, and input validation.

## 📂 Project Structure

```text
BMI-Calculator/
│
├── index.html
├── bmi.js
└── README.md
```

## 🧮 BMI Calculation

The calculator uses the standard BMI formula:

```javascript
BMI = weight / (height * height)
```

Where:
- Weight is measured in kilograms (kg).
- Height is converted from centimetres (cm) to metres (m).

For example:

```javascript
let heightInMeter = height / 100;
let bmi = weight / (heightInMeter * heightInMeter);
```

## 📋 BMI Categories

| BMI Range | Category |
|---|---|
| Below 18.5 | Underweight |
| 18.5 – 24.9 | Normal Weight |
| 25 – 29.9 | Overweight |
| 30 and above | Obesity |

*These categories are intended for general adult screening and are not a substitute for professional medical advice.*

## ⚙️ How It Works

1. Enter your weight in kilograms.
2. Enter your height in centimetres.
3. Click the **Calculate BMI** button.
4. The application converts height into metres.
5. JavaScript calculates your BMI.
6. Your BMI category is displayed instantly.

## 🧠 JavaScript Concepts Practiced

- DOM Selection and Manipulation
- Event Listeners (`addEventListener`)
- Input Event Handling
- Conditional Statements
- Functions and Function Arguments
- Input Validation
- `setTimeout()` and `clearTimeout()`
- Mathematical Operations

## 🔮 Future Improvements

- Display the exact BMI value alongside the category.
- Add visual indicators for BMI ranges.
- Improve accessibility and keyboard interaction.
- Add support for different measurement units.
- Introduce more detailed result visualization.

## 👨‍💻 Author

**Kamrul Hassan**

Frontend Web Developer

## ⭐ Support

If you find this project useful, consider giving the repository a star!

