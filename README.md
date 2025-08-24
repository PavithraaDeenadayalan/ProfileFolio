# ProfileFolio

A modern, responsive user directory application for managing team members and organizational contacts. Built with vanilla HTML, CSS, and JavaScript.

## Features

- **Interactive User Directory**: Browse team members with beautiful card-based layout
- **Advanced Search & Filter**: Search by name/email and filter by department
- **Real-time Statistics**: View total users and departments at a glance
- **CRUD Operations**: Add and delete users with simple prompts
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Modern UI/UX**: Glass morphism effects, smooth animations, and gradient backgrounds

## Demo

**Live Demo**: [https://pavithraadeenadayalan.github.io/ProfileFolio/](https://pavithraadeenadayalan.github.io/ProfileFolio/)

## Screenshots

![ProfileFolio Interface](https://github.com/PavithraaDeenadayalan/ProfileFolio/blob/main/ProfileFolio.png)

## Technologies Used

- **HTML5** - Semantic markup structure
- **CSS3** - Modern styling with flexbox/grid, animations, and backdrop filters
- **JavaScript (ES6+)** - Dynamic functionality and DOM manipulation
- **Responsive Design** - Mobile-first approach

## Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/PavithraaDeenadayalan/ProfileFolio.git
   ```

2. **Navigate to project directory**
   ```bash
   cd ProfileFolio
   ```

3. **Open in browser**
   ```bash
   # Simply open index.html in your preferred browser
   open index.html
   ```
   Or use a local development server:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js (http-server)
   npx http-server
   ```

## Usage

### Viewing Users
- Browse the user directory with profile cards displaying name, email, and department
- Use the search box to find specific users by name or email
- Filter users by department using the dropdown menu

### Adding Users
- Click the floating **"+"** button in the bottom-right corner
- Fill in the required information:
  - Full Name
  - Email Address
  - Department
  - Profile Image URL (optional)

### Deleting Users
- Hover over any user card to reveal the delete button
- Click **"Delete"** and confirm to remove the user

### Statistics
- View real-time counts of total users and departments in the header section

## UI Features

- **Glass Morphism**: Modern translucent design elements
- **Gradient Backgrounds**: Beautiful color transitions
- **Smooth Animations**: Hover effects and transitions
- **Profile Avatars**: Automatic initial generation with gradient backgrounds
- **Responsive Grid**: Adaptive layout for all screen sizes

## Responsive Breakpoints

- **Desktop**: > 768px
- **Tablet**: 481px - 768px  
- **Mobile**: ≤ 480px

## Customization

### Adding New Departments
Departments are automatically populated based on user data. Simply add users with new departments to expand the filter options.

### Styling
Modify `style.css` to customize:
- Color schemes and gradients
- Animation timings
- Card layouts and spacing
- Typography and fonts

### Data Structure
Each user object contains:
```javascript
{
    id: Number,
    name: String,
    email: String,
    department: String,
    profileImage: String (optional)
}
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Author

**Pavithraa Deenadayalan**
- GitHub: [@PavithraaDeenadayalan](https://github.com/PavithraaDeenadayalan)

## Show Your Support

Give a ⭐️ if you like this project!

---

*Built with ❤️ for modern web experiences*
