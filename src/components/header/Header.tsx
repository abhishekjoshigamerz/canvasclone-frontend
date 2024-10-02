const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">Canva Clone Application</h1>
      <button
        className="bg-gray-400 text-white px-4 py-2 rounded cursor-not-allowed opacity-50"
        disabled
      >
        Download image in JPG
      </button>
    </header>
  );
};

export default Header;
