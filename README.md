# Let's Cook 🍳

A modern, interactive recipe discovery web application built with React and Vite. Search for delicious recipes from around the world using multiple search methods - by region, dish name, or main ingredient.

## 🌟 Features

### 1. **Search by Region**
Browse recipes from different countries and cuisines worldwide. Simply enter a country name to discover authentic dishes from that region.

### 2. **Search by Name**
Know the dish you want? Search directly by the meal name to get detailed recipes, ingredients, and cooking instructions.

### 3. **Search by Ingredient**
Have a specific ingredient in mind? Find all recipes that feature that ingredient as a main component.

### 4. **Detailed Recipe View**
Each recipe includes:
- High-quality food images
- Complete ingredient list with measurements
- Step-by-step cooking instructions
- Country of origin and meal category
- YouTube video tutorial links

## 🛠️ Tech Stack

- **Frontend Framework:** React 19.1.0
- **Build Tool:** Vite 7.0.0
- **Routing:** React Router DOM 7.7.0
- **HTTP Client:** Axios 1.10.0
- **UI Components:** React Icons 5.5.0
- **Loading Animations:** React Spinners 0.17.0
- **Styling:** Custom CSS with modern gradients and animations

## 📁 Project Structure

```
letscook/
├── public/
│   └── vite.svg
├── src/
│   ├── API/
│   │   └── apiInstance.jsx          # Axios configuration & API calls
│   ├── Components/
│   │   ├── Layout/
│   │   │   ├── AppLayout.jsx        # Main layout wrapper
│   │   │   ├── MealDetails.jsx      # Individual meal details (Region)
│   │   │   └── IngDetails.jsx       # Individual meal details (Ingredient)
│   │   ├── Pages/
│   │   │   ├── Home.jsx             # Landing page
│   │   │   ├── HeroPage.jsx         # Hero section
│   │   │   ├── FeaturesPage.jsx     # Features showcase
│   │   │   └── ErrorPage.jsx        # 404 error page
│   │   └── Ui/
│   │       ├── Header.jsx           # Navigation header
│   │       ├── Footer.jsx           # Footer with social links
│   │       ├── Region.jsx           # Search by region component
│   │       ├── RegionCard.jsx       # Region search results cards
│   │       ├── Name.jsx             # Search by name component
│   │       ├── Ingredion.jsx        # Search by ingredient component
│   │       └── IngrediontsCards.jsx # Ingredient search results cards
│   ├── App.jsx                      # Router configuration
│   ├── App.css                      # Global styles
│   ├── main.jsx                     # Application entry point
│   └── index.css                    # Base CSS
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd letscook
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🔌 API Integration

This application uses [TheMealDB API](https://www.themealdb.com/api.php) to fetch recipe data.

### API Endpoints Used:
- `/filter.php?a={country}` - Get meals by region
- `/lookup.php?i={mealId}` - Get meal details by ID
- `/search.php?s={mealName}` - Search meals by name
- `/filter.php?i={ingredient}` - Get meals by ingredient

## 🎨 Design Features

- **Responsive Design:** Fully responsive across desktop, tablet, and mobile devices
- **Modern UI:** Clean, food-themed color palette with warm gradients
- **Smooth Animations:** Hover effects, transitions, and loading states
- **Loading States:** PacmanLoader animations for better UX
- **Error Handling:** User-friendly error messages and 404 page

## 🧭 Routing Structure

```
/                           # Home page
/features                   # Features overview
/features/region            # Search by region
/features/region/:id        # Individual meal details (region)
/features/name              # Search by name
/features/ing               # Search by ingredient
/features/ing/:id           # Individual meal details (ingredient)
*                           # 404 Error page
```

## 🎯 Key Components Explained

### API Layer (`apiInstance.jsx`)
Centralized Axios instance with base URL configuration and reusable API methods for all data fetching operations.

### Layout Components
- **AppLayout:** Wraps all pages with Header and Footer
- **MealDetails:** Displays full recipe details from region search
- **IngDetails:** Displays full recipe details from ingredient search

### Page Components
- **Home:** Combines HeroPage and FeaturesPage
- **HeroPage:** Welcome section with call-to-action
- **FeaturesPage:** Showcases three search methods with navigation
- **ErrorPage:** Custom 404 page with navigation back to home

### UI Components
- **Header:** Sticky navigation with logo
- **Footer:** Social media links and copyright
- **Region/Name/Ingredion:** Search interfaces with real-time results
- **RegionCard/IngrediontsCards:** Display search results in card format

## 🔮 Potential Features to Add

1. **User Authentication:** Save favorite recipes
2. **Recipe Collections:** Create and manage custom recipe collections
3. **Advanced Filters:** Filter by dietary restrictions, cooking time, difficulty
4. **Shopping List:** Generate ingredient shopping lists
5. **Meal Planner:** Weekly meal planning feature
6. **Recipe Ratings:** User reviews and ratings
7. **Share Functionality:** Share recipes on social media
8. **Print Recipe:** Printer-friendly recipe format
9. **Dark Mode:** Toggle between light and dark themes
10. **Multi-language Support:** Internationalization
11. **Nutritional Information:** Display calories and nutritional facts
12. **Recipe Suggestions:** AI-powered recipe recommendations
13. **Cooking Timer:** Built-in timer for cooking steps
14. **Ingredient Substitutions:** Suggest alternative ingredients

## 👨‍💻 Author

**Harsh Mishra**
- GitHub: [@Typecaster12](https://github.com/Typecaster12)
- Instagram: [@hlo_harsh_](https://www.instagram.com/hlo_harsh_)
- Facebook: [Profile](https://www.facebook.com/profile.php?id=100028074483539)

## 📄 License

All Rights Reserved © Harsh Mishra, 2025

## 🙏 Acknowledgments

- [TheMealDB](https://www.themealdb.com/) for providing the free recipe API
- [React Icons](https://react-icons.github.io/react-icons/) for beautiful icons
- [React Spinners](https://www.davidhu.io/react-spinners/) for loading animations
