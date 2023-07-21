/* eslint-disable react/prop-types */
function StucleCard(props) {
    console.log('prop: ', props)

      // Function to truncate text and add ellipsis if it exceeds the limit
  const truncateText = (text, maxLength) => {
    return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
  };

  const truncatedNames = truncateText(props.names, 18);

  const backgroundImageStyle = {
    backgroundImage: 'url("")',
    backgroundSize: 'cover', // Adjust to your needs
    backgroundPosition: 'center', // Adjust to your needs
  };

  return (
    // <div className="h-[200px] w-[200px] bg-black rounded-2xl shadow-md hover:shadow-md hover:shadow-indigo-700/50 hover:border hover:bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 hover:scale-105 cursor-pointer transition-all ease-in-out duration-500">
    //     card
    //     {props}
    // </div>
<div className="h-[200px] w-[200px] rounded-xl bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 hover:bg-indigo-700 shadow-black/70 shadow-md hover:shadow-violet-500/30 hover:shadow-2xl flex items-center justify-center hover:scale-105 transition-all ease-in-out duration-500 cursor-pointer">
  <div className="h-[194px] w-[194px] rounded-xl bg-black flex items-end"  style={backgroundImageStyle}>
    <div className="flex items-center justify-start gap-2 bg-white/30 hover:bg-white hov backdrop-blur-md w-[194px] m-2 rounded px-2 break-normal overflow-hidden whitespace-nowrap text-overflow-ellipsis">
      <div className="h-2 w-2 bg-green-500 rounded-2xl border-white border shadow-inner"></div>
      <p className="text-sm">{truncatedNames}</p>
      {}
    </div>
  </div>
</div>
  )
}

export default StucleCard