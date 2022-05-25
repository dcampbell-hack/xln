import BodySegmentation from "./models/bodySegmentation";
import Deeplab from "./models/deeplab";
import DepthEstimation from "./models/depthEstimation";
import FaceDetection from "./models/faceDetection";
import FaceLandmarksDetection from "./models/faceLandmarksDetection";
import HandPoseDetection from "./models/handPoseDetection";/
import KNNClassifier from "./models/knnClassifier";
import Mobilenet from "./models/mobilenet";
import ObjectDetection from "./models/objectDetection";
import PoseDetection from "./models/poseDetection";
import Posenet from "./models/posenet";
import QNA from "./models/qna";
import SpeechCommands from "./models/speechCommands";
import Tasks from "./models/tasks";
import Toxicity from "./models/toxicity";
import UniversalSentenceEncoder from "./models/universalSentenceEncoder";


const AIModelSelector = ({ type }) => {

    return (
        <div>
           {
              {
                  bodySegmentation: <BodySegmentation />,
                  deepLab: <Deeplab />,
                  depthEstimation: <DepthEstimation />,
                  faceDetection: <FaceDetection />,
                  faceLandmarkDetection: <FaceLandmarksDetection />,
                  handPoseDetection: <HandPoseDetection />,
                  knnClassifier: <KNNClassifier />,
                  mobileNet: <Mobilenet />,
                  objectDetection: <ObjectDetection />,
                  poseDetection: <PoseDetection />,
                  poseNet: <Posenet />,
                  qna: <QNA />,
                  speechCommands: <SpeechCommands />,
                  tasks: <Tasks />,
                  toxicity: <Toxicity />,
                  universalSentenceEncoder: <UniversalSentenceEncoder />
              }[type]
           }
        </div>
    )
}

export default AIModelSelector;