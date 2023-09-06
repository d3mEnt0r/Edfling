import React, { useEffect } from 'react';
import { JaaSMeeting } from '@jitsi/react-sdk';
import { useNavigate } from 'react-router-dom';

const ChatPage = () => {
  const navigate = useNavigate();

  const roomName = prompt("Enter the Room Name");
  const YOUR_APP_ID = prompt("Enter the AppId");

  useEffect(() => {
    if (!roomName || !YOUR_APP_ID) {
      navigate("/");
    }

    return () => {
      // Redirect to the home route when the component unmounts or closes the meeting
      navigate("/");
    };
  }, [navigate, roomName, YOUR_APP_ID]);

  return (
    <div>
      <JaaSMeeting
        appId={YOUR_APP_ID}
        roomName={roomName}
        useStaging={true}
        getIFrameRef={(iframeRef) => {
          iframeRef.style.height = '600px';
        }}
        onReadyToClose={() => {
          navigate("/");
        }}
        onApiReady={(externalApi) =>
          console.log('Jitsi Meet External API', externalApi)
        }
      />
    </div>
  );
};

export default ChatPage;
