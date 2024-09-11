import jsLogo from '../assets/js_logo.png';  // JavaScript logosunu getiriyorum
import reactLogo from '../assets/react_logo.png';  // React logosunu getiriyorum
import reduxLogo from '../assets/redux_logo.png';  // Redux logosunu getiriyorum
import nodeLogo from '../assets/node_logo.png';  // Node.js logosunu getiriyorum
import vscodeLogo from '../assets/vscode_logo.png';  // VS Code logosunu getiriyorum
import figmaLogo from '../assets/figma_logo.png';  // Figma logosunu getiriyorum

function Skills() {
  return (
    <section className="skills py-10">
      {/* Skills başlığı, hover olduğunda yazı rengini pembeye dönüştürüyorum, geçiş süresi 300ms */}
      <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-center dark:text-white hover:text-pink-500 transition-colors duration-300">
        Skills
      </h2>

      {/* Yeteneklerimi flexbox ile yan yana ve küçük ekranlarda düzgün görüntülenmesi için flex-wrap ile düzenledim */}
      <div className="flex justify-center space-x-6 flex-wrap">
        
        {/* JavaScript logosu ve ismi, hover efektiyle büyüme ve gölge ekliyorum */}
        <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded text-center shadow w-[100px] lg:w-[150px] transition transform hover:scale-105 hover:shadow-xl duration-500 ease-in-out">
          <img src={jsLogo} alt="JavaScript" className="w-12 lg:w-16 h-12 lg:h-16 mx-auto mb-2" />
          <p className="font-semibold dark:text-gray-300">JavaScript</p>
        </div>

        {/* React logosu ve ismi, hover efektiyle büyüme ve gölge ekliyorum */}
        <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded text-center shadow w-[100px] lg:w-[150px] transition transform hover:scale-105 hover:shadow-xl duration-500 ease-in-out">
          <img src={reactLogo} alt="React" className="w-12 lg:w-16 h-12 lg:h-16 mx-auto mb-2" />
          <p className="font-semibold dark:text-gray-300">React</p>
        </div>

        {/* Redux logosu ve ismi, hover efektiyle büyüme ve gölge ekliyorum */}
        <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded text-center shadow w-[100px] lg:w-[150px] transition transform hover:scale-105 hover:shadow-xl duration-500 ease-in-out">
          <img src={reduxLogo} alt="Redux" className="w-12 lg:w-16 h-12 lg:h-16 mx-auto mb-2" />
          <p className="font-semibold dark:text-gray-300">Redux</p>
        </div>

        {/* Node.js logosu ve ismi, hover efektiyle büyüme ve gölge ekliyorum */}
        <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded text-center shadow w-[100px] lg:w-[150px] transition transform hover:scale-105 hover:shadow-xl duration-500 ease-in-out">
          <img src={nodeLogo} alt="Node.js" className="w-12 lg:w-16 h-12 lg:h-16 mx-auto mb-2" />
          <p className="font-semibold dark:text-gray-300">Node.js</p>
        </div>

        {/* VS Code logosu ve ismi, hover efektiyle büyüme ve gölge ekliyorum */}
        <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded text-center shadow w-[100px] lg:w-[150px] transition transform hover:scale-105 hover:shadow-xl duration-500 ease-in-out">
          <img src={vscodeLogo} alt="VS Code" className="w-12 lg:w-16 h-12 lg:h-16 mx-auto mb-2" />
          <p className="font-semibold dark:text-gray-300">VS Code</p>
        </div>

        {/* Figma logosu ve ismi, hover efektiyle büyüme ve gölge ekliyorum */}
        <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded text-center shadow w-[100px] lg:w-[150px] transition transform hover:scale-105 hover:shadow-xl duration-500 ease-in-out">
          <img src={figmaLogo} alt="Figma" className="w-12 lg:w-16 h-12 lg:h-16 mx-auto mb-2" />
          <p className="font-semibold dark:text-gray-300">Figma</p>
        </div>
      </div>
    </section>
  );
}

export default Skills;