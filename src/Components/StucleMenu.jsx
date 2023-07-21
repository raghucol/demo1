import * as Popover from '@radix-ui/react-popover';
import { useState } from 'react';
import * as Avatar from '@radix-ui/react-avatar';



function StucleMenu() {

    const [triggerColor, setTriggerColor] = useState('bg-transparent');
    const [shareTextColor, setshareTextColor] = useState('text-white/50');
    const [rotateIcon, setRotateIcon] = useState(false);
    const [showPopover, setShowPopover] = useState(false);

    const [isMicOn, setMicOn] = useState(true);
    const [isVideoOn, setVideoOn] = useState(false);


    const handleScreenShareToggle = () => {
        // Toggle the trigger color between bg-white/10 and none.
        setshareTextColor(shareTextColor === 'text-white/50' ? 'text-white' : 'text-white/50');

        // Toggle the icon rotation.
        setRotateIcon(!rotateIcon);

        // Toggle fade effect.
        setShowPopover((prev) => !prev);
      };

    const handleTeamRoomToggle = () => {
        // Toggle the trigger color between bg-white/10 and none.
        setTriggerColor(triggerColor === 'bg-white/10' ? 'bg-transparent' : 'bg-white/10');

        // Toggle the icon rotation.
        setRotateIcon(!rotateIcon);

        // Toggle fade effect.
        setShowPopover((prev) => !prev);

    } 

    const handleAvatarToggle = () => {

        // Toggle fade effect.
        setShowPopover((prev) => !prev);

    }
    
      // Toggle mic on/off
      const handleMicToggle = () => {
        setMicOn((prevIsMicOn) => !prevIsMicOn);
      };

      // Toggle Video on/off
      const handleVideoToggle = () => {
        setVideoOn((prevIsVideoOn) => !prevIsVideoOn);
      };

  return (
    
    <menu className="flex items-center justify-between  bg-gradient-to-r from-violet-800 to-indigo-600 px-2 py-1 m-4 divide-x divide-white/5 rounded-md shadow-black/30 shadow-xl hover:shadow-2xl hover:shadow-black/50 transition-all ease-in-out duration-150 text-sm ">

        
        <div className='flex items-center justify-between'>
            <a href="" className=' '>
                <img src="../logo.jpg" alt="Stucle 2 logo" className='h-10 w-10  shadow-black/30 shadow-xl rounded  mr-5' />
            </a>
            <div>
                <a href="" className="flex items-center justify-center gap-1 p-2 rounded-lg m-1 transition-all ease-in-out duration-300 hover:shadow-2xl hover:-translate-y-0.5 hover:bg-gradient-to-r from-rose-400/50 via-fuchsia-500/50 to-indigo-500/50">
                    <span className="material-icons-outlined text-base">people</span>
                    People
                </a>
            </div>

            <div>
                <a href="" className="flex items-center justify-center gap-1 p-2 rounded-lg m-1 transition-all ease-in-out duration-300 hover:shadow-2xl hover:-translate-y-0.5 hover:bg-gradient-to-r from-rose-400/50 via-fuchsia-500/50 to-indigo-500/50">
                    <span className="material-icons-outlined text-base">groups</span>
                    Groups
                </a>
            </div>

            <div>
                <a href="" className="flex items-center justify-center gap-1 p-2 rounded-lg m-1 transition-all ease-in-out duration-300 hover:shadow-2xl hover:-translate-y-0.5 hover:bg-gradient-to-r from-rose-400/50 via-fuchsia-500/50 to-indigo-500/50">
                    <span className="material-icons-outlined text-base">chat_bubble_outline</span>
                    Chat
                </a>
            </div>

            <div>
                <a href="" className="flex items-center justify-center gap-1 p-2 rounded-lg m-1 transition-all ease-in-out duration-300 hover:shadow-2xl hover:-translate-y-0.5 hover:bg-gradient-to-r from-rose-400/50 via-fuchsia-500/50 to-indigo-500/50">
                    <span className="material-icons-outlined text-base">spoke</span>
                    Meet
                </a>
            </div>

            <div>
                <a href="" className="flex items-center justify-center gap-1 p-2 rounded-lg m-1 transition-all ease-in-out duration-300 hover:shadow-2xl hover:-translate-y-0.5 hover:bg-gradient-to-r from-rose-400/50 via-fuchsia-500/50 to-indigo-500/50">
                    <span className="material-icons-outlined text-base">description</span>
                    File
                </a>
            </div>

            <div>
                <a href="" className="flex items-center justify-center gap-1 p-2 rounded-lg m-1 transition-all ease-in-out duration-300 hover:shadow-2xl hover:-translate-y-0.5 hover:bg-gradient-to-r from-rose-400/50 via-fuchsia-500/50 to-indigo-500/50">
                    <span className="material-icons-outlined text-base">waving_hand</span>
                    Ping
                </a>
            </div>

            <div>
                <a href="" className="flex items-center justify-center gap-1 p-2 rounded-lg m-1 transition-all ease-in-out duration-300 hover:shadow-2xl hover:-translate-y-0.5 hover:bg-gradient-to-r from-rose-400/50 via-fuchsia-500/50 to-indigo-500/50">
                    <span className="material-icons-outlined text-base">format_list_bulleted</span>
                    Task
                </a>
            </div>

        </div>

        <div className='flex items-end justify-items-center gap-2 px-2'>
            <button onClick={handleMicToggle} className='p-2'>
            <span className={`material-icons-outlined ${ isMicOn ? 'text-white' : 'text-white/40'} transition-all ease-in-out duration-300`}>
                {isMicOn ? 'mic' : 'mic_off'}
            </span>
            </button>

            <button onClick={handleVideoToggle} className='p-2'>
            <span className={`material-icons-outlined ${ isVideoOn ? 'text-white' : 'text-white/40'} transition-all ease-in-out duration-300`}>
                {isVideoOn ? 'videocam' : 'videocam_off'}
            </span>
            </button>

            <Popover.Root>
                <Popover.Trigger
                className="flex items-center justify-center gap-2 p-2 rounded-lg m-1"
                onClick={handleScreenShareToggle}
                >
                <span className= {`material-icons-outlined ${shareTextColor}`}>screen_share</span>
                <span className={`material-icons-outlined text-lg transform  transition-all ease-in-out duration-300 ${rotateIcon ? 'rotate-180' : ''}`}>
                expand_more
                </span>
                </Popover.Trigger>
                {showPopover && ( // Render the Popover only when showPopover is true
                <Popover.Portal>
                    <Popover.Content className={`bg-white shadow-2xl p-2 rounded text-black ${showPopover ? 'fadeIn' : 'fadeOut'}`}>
                        <div className='flex flex-col gap-2 divide-y divide text-sm font-normal'>
                        <a href="" className='p-2 rounded hover:bg-indigo-200/50 hover:text-indigo-500 hover:shadow-inner transition-all ease-in-out duration-300 flex items-center gap-1'>
                            <span className="material-icons-outlined text-base">computer</span>
                            Screen                    
                        </a>
                        <a href="" className='p-2 rounded hover:bg-indigo-200/50 hover:text-indigo-500 hover:shadow-inner transition-all ease-in-out duration-300 flex items-center gap-1'>
                            <span className="material-icons-outlined text-base">web_asset</span>
                            Applications
                        </a>
                        </div>
                        <Popover.Arrow className='fill-white/50' />
                    </Popover.Content>
                </Popover.Portal>
                )}
            </Popover.Root>
        </div>


        <Popover.Root>
            <Popover.Trigger
            className={`flex items-center justify-center gap-2 p-2 rounded-lg m-1 hover:bg-white/10 hover:shadow-inner ${triggerColor}`}
            onClick={handleTeamRoomToggle}
            >
            <p className='font-medium text-base'>Assam</p>
            <span className={`material-icons-outlined text-lg transform  transition-all ease-in-out duration-300 ${rotateIcon ? 'rotate-180' : ''}`}>
            expand_more
            </span>
            </Popover.Trigger>
            {showPopover && ( // Render the Popover only when showPopover is true
            <Popover.Portal>
                <Popover.Content className={`bg-white shadow-2xl p-2 rounded text-black ${showPopover ? 'fadeIn' : 'fadeOut'}`}>
                    <div className='flex flex-col gap-2 divide-y divide text-sm font-normal'>
                    <a href="" className='p-2 rounded hover:bg-indigo-200/50 hover:text-indigo-500 hover:shadow-inner transition-all ease-in-out duration-300'>Assam Link 1</a>
                    <a href="" className='p-2 rounded hover:bg-indigo-200/50 hover:text-indigo-500 hover:shadow-inner transition-all ease-in-out duration-300'>Assam Link 2</a>
                    <a href="" className='p-2 rounded hover:bg-indigo-200/50 hover:text-indigo-500 hover:shadow-inner transition-all ease-in-out duration-300'>Assam Link 3</a>
                    </div>
                    <Popover.Arrow className='fill-white/50' />
                </Popover.Content>
            </Popover.Portal>
            )}
        </Popover.Root>

        <Popover.Root>
            <Popover.Trigger
            className={`flex items-center justify-center gap-2 p-2 rounded-lg m-1 `}
            onClick={handleAvatarToggle}
            >
            <Avatar.Root className='bg-white/80 hover:bg-white rounded-full text-indigo-500 p-2 font-bold outline  outline-offset-1 hover:-translate-y-1 hover: scale-110 cursor-pointer  transition-all ease-in-out duration-300'>
                    <Avatar.Image />
                    <Avatar.Fallback className="AvatarFallback">RB</Avatar.Fallback>
                </Avatar.Root>
            </Popover.Trigger>
            {showPopover && ( // Render the Popover only when showPopover is true
            <Popover.Portal>
                <Popover.Content sideOffset={5} className={`bg-white shadow-2xl divide-y mx-4 p-2 rounded text-black ${showPopover ? 'fadeIn' : 'fadeOut'}`}>
                    <a href="" className="flex items-center justify-center gap-1 p-2 rounded-lg m-1 transition-all ease-in-out duration-300 hover:bg-indigo-200/50 hover:text-indigo-500 hover:shadow-inner ">
                        <span className="material-icons-outlined text-base">manage_accounts</span>
                        <p className='text-sm'>Manage Account</p>
                    </a>
                    <a href="" className="flex items-center justify-start  gap-1 p-2 rounded-lg m-1 transition-all ease-in-out duration-300 hover:bg-indigo-200/50 hover:text-indigo-500 hover:shadow-inner ">
                        <span className="material-icons-outlined text-base">notifications</span>
                        <p className='text-sm'>Notifications</p>
                    </a>
                    <a href="" className="flex items-center text-red-500 justify-start  gap-1 p-2 rounded-lg m-1 transition-all ease-in-out duration-300 hover:bg-red-300 hover:text-black hover:shadow-inner ">
                        <span className="material-icons-outlined text-base">logout</span>
                        <p className='text-sm'>Sign Out</p>
                    </a>
                    <Popover.Arrow className='fill-white/50' />
                </Popover.Content>
            </Popover.Portal>
            )}
        </Popover.Root>



 
    </menu>

    
  )
}

export default StucleMenu