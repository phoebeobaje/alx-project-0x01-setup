const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto text-center">
        <p className="text-sm">© 2023 Your Company. All rights reserved.</p>
        <div className="mt-2">
          <a href="#" className="text-blue-400 hover:underline mx-2">Privacy Policy</a>
          <a href="#" className="text-blue-400 hover:underline mx-2">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
export default Footer;