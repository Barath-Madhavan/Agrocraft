# 🌾 AgroCraft - Agricultural E-Commerce Platform

AgroCraft is a full-stack agricultural e-commerce platform designed to connect farmers, consumers, and suppliers. The platform enables farmers to purchase seeds, lend/borrow farming machinery, and sell their produce directly to consumers.

## 🚀 Features

### For Farmers
- **Purchase Seeds**: Browse and buy quality seeds from verified suppliers
- **Lend/Borrow Machines**: Access farming machinery on rent or lend your equipment
- **Sell Produce**: Sell agricultural products directly to consumers
- **Dashboard**: Manage orders, products, and track business metrics

### For Consumers
- Browse and purchase fresh farm products directly from farmers
- View product details, ratings, and reviews
- Secure checkout with PayPal integration
- Track orders and delivery status

### For Suppliers
- List and manage seed inventory
- List farming machinery for rent
- Manage product listings and pricing

### For Administrators
- **Dashboard Analytics**: View sales, orders, and user statistics
- **User Management**: View, edit, and manage user accounts
- **Product Management**: Oversee all products (seeds, machines, consumer products)
- **Order Management**: Track and manage all orders
- **Map Integration**: Visual representation of agricultural data

## 🛠️ Tech Stack

### Frontend
- **React 17** - Modern UI library
- **Redux** - State management with Redux Thunk
- **React Router** - Client-side routing
- **Bootstrap 4 & Reactstrap** - UI components
- **Material UI** - Additional UI components
- **Chart.js** - Data visualization
- **Google Maps API** - Location services
- **PayPal Integration** - Payment processing
- **Axios** - HTTP client

### Backend
- Node.js with Express
- MongoDB database
- RESTful API architecture

## 📁 Project Structure

```
frontend/
├── public/
│   ├── favicon/
│   ├── images/
│   └── uploads/          # Product images
├── src/
│   ├── actions/          # Redux actions
│   ├── components/       # Reusable UI components
│   │   ├── CardMenuSet/
│   │   ├── CheckoutSteps/
│   │   ├── ConsumerProducts/
│   │   ├── DashBoard/
│   │   ├── Footer/
│   │   ├── FormContainer/
│   │   ├── Header/
│   │   ├── LendMachines/
│   │   ├── Login/
│   │   ├── Register/
│   │   ├── Slider/
│   │   └── ...
│   ├── constants/        # App constants
│   ├── reducers/         # Redux reducers
│   ├── screens/          # Page components
│   │   ├── Cart/
│   │   ├── Consumer/
│   │   ├── Dashboard/
│   │   ├── Farmer/
│   │   ├── Home/
│   │   ├── Order/
│   │   ├── Payment/
│   │   ├── Profile/
│   │   ├── Shipping/
│   │   ├── Supplier/
│   │   └── ...
│   ├── App.js
│   ├── Layout.js
│   └── index.js
├── package.json
└── README.md
```

## 🏁 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- Backend API running (see backend setup)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Barath-Madhavan/Agrocraft.git
   cd Agrocraft/frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Configure environment variables**
   
   Create a `.env` file in the root directory:
   ```env
   REACT_APP_GOOGLE_MAPS_API_KEY=your_google_maps_api_key
   REACT_APP_PAYPAL_CLIENT_ID=your_paypal_client_id
   ```

4. **Start the development server**
   ```bash
   npm start
   # or
   yarn start
   ```

5. **Open your browser**
   ```
   http://localhost:3000
   ```

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Runs the app in development mode |
| `npm build` | Builds the app for production |
| `npm test` | Launches the test runner |
| `npm eject` | Ejects from Create React App |

## 🔗 API Proxy

The frontend is configured to proxy API requests to the backend server:
```json
"proxy": "http://127.0.0.1:5000"
```

## 📱 Key Pages & Routes

| Route | Description |
|-------|-------------|
| `/` | Home page |
| `/farmer` | Farmer dashboard |
| `/consumer` | Consumer marketplace |
| `/supplier` | Supplier portal |
| `/login` | User login |
| `/register` | User registration |
| `/profile` | User profile |
| `/cart` | Shopping cart |
| `/shipping` | Shipping details |
| `/payment` | Payment method |
| `/order/:id` | Order details |
| `/farmers/purchaseSeeds` | Seed catalog |
| `/farmers/lendMachines` | Machine rental |
| `/admin/dashboard` | Admin dashboard |
| `/admin/userList` | User management |
| `/admin/productlist` | Product management |
| `/admin/orderlist` | Order management |

## 👥 User Roles

1. **Farmer** - Can purchase seeds, rent machines, sell products
2. **Consumer** - Can browse and purchase farm products
3. **Supplier** - Can list seeds and machinery
4. **Admin** - Full system access and management

## 🔒 Authentication & Authorization

- JWT-based authentication
- Role-based access control for protected routes
- Secure password handling

## 💳 Payment Integration

- PayPal payment gateway integration
- Secure checkout process
- Order confirmation and tracking

## 📊 Dashboard Features

- Sales analytics with Chart.js
- Order statistics
- User management
- Product inventory overview
- Interactive maps for location data

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 👨‍💻 Author

**Barath Madhavan**
- GitHub: [@Barath-Madhavan](https://github.com/Barath-Madhavan)

## 🙏 Acknowledgments

- React community
- Bootstrap & Material UI teams
- All contributors and supporters

---