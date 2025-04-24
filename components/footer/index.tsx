const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t">
      <div className="flex justify-center items-center p-5">
        {currentYear} DebugWear. All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
