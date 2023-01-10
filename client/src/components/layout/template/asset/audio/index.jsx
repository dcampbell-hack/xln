    import { useEffect, useRef } from 'react'
    
    
    // Set up the audio context and canvas
    const audioCtx = new AudioContext();
    
    // Load the audio file
    const audioUrl = "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3";
    const _audio = new Audio(audioUrl);
    
    // Create an audio source node from the audio element
    const source = audioCtx.createMediaElementSource(_audio);
    
    // Create an analyser node to analyze the audio data
    const analyser = audioCtx.createAnalyser();
    
    // Connect the audio source and analyser nodes
    source.connect(analyser);
    
    // Set the analyser's FFT size and smoothing time constant
    analyser.fftSize = 2048;
    analyser.smoothingTimeConstant = 0.6;



export const AudioTemplate = ({ options, setActionType }) => {    
    
        // Use the useRef hook to create a reference to the canvas element
        const canvasRef = useRef(null);
    
        // Use the useEffect hook to set up the visualizer when the component is mounted
        useEffect(() => {
          // Get the canvas context
          const canvas = canvasRef.current;
          const ctx = canvas.getContext("2d");
      
          // Get the frequency and time domain data from the analyser node
          const bufferLength = analyser.frequencyBinCount;
          const frequencyData = new Uint8Array(bufferLength);
          const timeDomainData = new Uint8Array(bufferLength);
      
          // Set up a loop to update the visualizer
          function update() {
            // Get the current frequency and time domain data from the analyser node
            analyser.getByteFrequencyData(frequencyData);
            analyser.getByteTimeDomainData(timeDomainData);
      
            // Clear the canvas
            ctx.clearRect(0, 0, canvas.width, canvas.height);
      
            // Draw the frequency data on the canvas using the canvas API
            // For example, you can use the `fillStyle` and `fillRect` methods
            // to draw a bar chart of the frequency data
      
            // Schedule the next update
            requestAnimationFrame(update);
          }
      
          // Start the visualizer
          update();
        }, []);
      
        // Render the canvas element
        return (
        <div className="audio-file">
            <canvas ref={canvasRef} />;
        </div>
        )
    }