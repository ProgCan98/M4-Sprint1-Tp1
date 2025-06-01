function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto text-center">
        <p>© 2025 MyPost. Todos los derechos reservados.</p>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="/" className="hover:text-blue-400 text-2xl">
            <i className="bi bi-facebook"></i>
          </a>
          <a href="/" className="hover:text-blue-400 text-2xl">
            <i className="bi bi-twitter"></i>
          </a>
          <a href="/" className="hover:text-blue-400 text-2xl">
            <i className="bi bi-instagram"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
