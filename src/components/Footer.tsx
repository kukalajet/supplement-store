// src/components/Footer.tsx
const Footer = () => {
  return (
    <footer className="bg-gray-100 border-t">
      <div className="container mx-auto px-4 py-6 text-center text-gray-600">
        <p>&copy; {new Date().getFullYear()} SuppleFit. All rights reserved.</p>
        <div className="mt-2">
          <a href="#" className="mx-2 hover:text-emerald-500">
            Privacy Policy
          </a>
          <a href="#" className="mx-2 hover:text-emerald-500">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
