import { TRIANGULATION, style, fingerJoints } from './definitions';


export const drawRect = (detections, ctx ) => {
    detections.forEach(prediction => {
        const [ x,y, width, height] = prediction['bbox'];
        const text = prediction['class'];
 
        // Set styling
        const color = 'green';
        ctx.strokeSyIt = color;
        ctx.font = '18px Arial';
        ctx.fillStyle = color;
 
        // Draw rectangle and text
        ctx.beginPath();
        ctx.fillText(text, x, y);
        ctx.rect( x, y, width, height);
        ctx.stroke();
    })
 }


  // Triangle drawing method
  const drawPath = (ctx, points, closePath) => {
    const region = new Path2D();
    region.moveTo(points[0][0], points[0][1]);
    for (let i = 1; i < points.length; i++) {
      const point = points[i];
      region.lineTo(point[0], point[1]);
    }
  
    if (closePath) {
      region.closePath();
    }
    ctx.strokeStyle = "grey";
    ctx.stroke(region);
  };
  
  // Drawing Mesh
  export const drawMesh = (predictions, ctx) => {
    if (predictions.length > 0) {
      predictions.forEach((prediction) => {
        const keypoints = prediction.scaledMesh;
  
        //  Draw Triangles
        for (let i = 0; i < TRIANGULATION.length / 3; i++) {
          // Get sets of three keypoints for the triangle
          const points = [
            TRIANGULATION[i * 3],
            TRIANGULATION[i * 3 + 1],
            TRIANGULATION[i * 3 + 2],
          ].map((index) => keypoints[index]);
          //  Draw triangle
          drawPath(ctx, points, true);
        }
  
        // Draw Dots
        for (let i = 0; i < keypoints.length; i++) {
          const x = keypoints[i][0];
          const y = keypoints[i][1];
  
          ctx.beginPath();
          ctx.arc(x, y, 1 /* radius */, 0, 3 * Math.PI);
          ctx.fillStyle = "aqua";
          ctx.fill();
        }
      });
    }
  };

  // Drawing function
export const drawHand = (predictions, ctx) => {
  // Check if we have predictions
  if (predictions.length > 0) {
    // Loop through each prediction
    predictions.forEach((prediction) => {
      // Grab landmarks
      const landmarks = prediction.landmarks;

      // Loop through fingers
      for (let j = 0; j < Object.keys(fingerJoints).length; j++) {
        let finger = Object.keys(fingerJoints)[j];
        //  Loop through pairs of joints
        for (let k = 0; k < fingerJoints[finger].length - 1; k++) {
          // Get pairs of joints
          const firstJointIndex = fingerJoints[finger][k];
          const secondJointIndex = fingerJoints[finger][k + 1];

          // Draw path
          ctx.beginPath();
          ctx.moveTo(
            landmarks[firstJointIndex][0],
            landmarks[firstJointIndex][1]
          );
          ctx.lineTo(
            landmarks[secondJointIndex][0],
            landmarks[secondJointIndex][1]
          );
          ctx.strokeStyle = "plum";
          ctx.lineWidth = 4;
          ctx.stroke();
        }
      }

      // Loop through landmarks and draw em
      for (let i = 0; i < landmarks.length; i++) {
        // Get x point
        const x = landmarks[i][0];
        // Get y point
        const y = landmarks[i][1];
        // Start drawing
        ctx.beginPath();
        ctx.arc(x, y, style[i]["size"], 0, 3 * Math.PI);

        // Set line color
        ctx.fillStyle = style[i]["color"];
        ctx.fill();
      }
    });
  }
};

  