import cv2
import mediapipe as mp 
import time

mpDraw = mp.solutions.drawing_utils
mpPose = mp.solutions.pose
pose = mpPose.Pose()

cap = cv2.VideoCapture('PoseVideos/1.mp4')
pTime = 0
while True:
    success, img = cap.read()
    imgRGB = cv2.cvtColor( img, cv2.COLOR_BGR2RGB)
    results = pose.process(imgRGB)
    print(results.pose_landmarks)

    if results.pose_landmarks:
       mpDraw.draw_landmarks( img, results.pose_landmarks, mpPose.POSE_CONNECTIONS )   
       for id, lm in enumerate(results.pose_landmarks.landmark):
        h,w,c = img.shape
        print(lm,id)
       cx, cy = lm.x*w, lm.y*h
       cv2.circle(img, (cx, cy), 15, ( 255,0,0), cv2.FILLED )
       
    cTime = time.time()
    fps = 1 / (cTime - pTime)
    pTime = cTime
    cv2.putText(img, str(int(fps)), ( 70, 50 ), cv2.FONT_HERSHEY_PLAIN, 3, ( 255,0,0), 3)
    cv2.imshow("Image", img )
    cv2.waitKey(1)

class poseDetector():

    def __init__(self, mode=False, upBody=False, smooth=True, detectionCon=0, trackingCon=0.5 ):
        self.mode = mode 
        self.upBody = upBody
        self.smooth = smooth 
        self.detectionCon = detectionCon
        self.trackCon = trackCon



def main():
    cap = cv2.VideoCapture("PoseVideo/3.mp4")
    pTime = 0 
    while True:
        success, img = cap.read()

if __name__ == "__main__":
    main()