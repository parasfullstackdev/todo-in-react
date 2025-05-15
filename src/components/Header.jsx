// Header.jsx
const Header = ({ title }) => {
  return (
    <header className="bg-blue-600 text-white py-4 mb-6">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-2xl font-bold text-center">{title}</h1>
      </div>
    </header>
  );
};

export default Header;