import StaggeredMenu from './StaggeredMenu';

const Navbar = () => {
  const menuItems = [
    { label: 'Home', ariaLabel: 'Go to home page', link: '#home' },
    { label: 'About', ariaLabel: 'Learn about us', link: '#about' },
    { label: 'Projects', ariaLabel: 'View our services', link: '#projects' },
    { label: 'Stats', ariaLabel: 'My Stats', link: '#stats' },
    { label: 'Contact', ariaLabel: 'Get in touch', link: '#contact' },
    { label: 'Blog', ariaLabel: 'My Blog', link: 'https://blog-rzfan.vercel.app/' }
  ];
  
  const socialItems = [
    { label: 'GitHub', link: 'https://github.com/Rzfan03' }
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-[100] h-screen pointer-events-none">
      <StaggeredMenu
        className="w-full" 
        position="right"
        items={menuItems}
        socialItems={socialItems}
        displaySocials={true}
        displayItemNumbering={true}
        menuButtonColor="#ffffff"
        openMenuButtonColor="#18181b" // Agar terlihat di panel putih
        changeMenuColorOnOpen={true}
        colors={['#B19EEF', '#5227FF']}
        logoUrl="https://sabalong-ui.vercel.app/_next/image?url=%2Flogo.png&w=48&q=75"
        accentColor="#00000" // Ubah dari #00000 agar terlihat
        onMenuOpen={() => console.log('Menu opened')}
        onMenuClose={() => console.log('Menu closed')}
      />
    </nav>
  );
};

export default Navbar;