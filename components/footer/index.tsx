const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t">
      <div className="flex justify-center items-center">
        {currentYear} DebugWear. All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
