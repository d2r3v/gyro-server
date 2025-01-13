# Unity Gyroscope Controller

**Unity Gyroscope Controller** is a web-based application that allows users to control a Unity application using gyroscope data from their mobile device. The system leverages React for the frontend, WebSockets for real-time communication, and Unity for rendering the application.

## Features

### **Mobile Gyroscope Control**

* Capture real-time gyroscope data from a mobile device.

* Use the phone’s orientation to interact with the Unity application 

### **Web-based interface**

* A React-based website that provides:
    * A QR code for users to connect their mobile device.

    * Visual indicators of the gyroscope data being transmitted.

### **Real-Time interaction**

* Uses WebSockets for low-latency communication between the mobile device and the Unity application.

* Ensures a smooth and responsive interaction with sub-100ms latency.

### **Unity Integration**

* Unity server receives gyroscope data and applies it to control elements in the scene, such as:
    * Rotating objects.

    * Moving the camera.
    * Interactive gameplay mechanics.

## Tech Stack

### **Frontend** 

* **React:** For the user interface and QR code generation.

* **WebSocket API:** For real-time data streaming from the phone to the server.
### **Backend**
* **Node.js:** Acts as a WebSocket server to relay gyroscope data.

* **Express.js:** Provides the backend structure for the React app.
### **Unity**
* **Unity:** The game engine used to build the 3D application.

* **C# WebSocket Client:** To connect Unity to the backend WebSocket server.

## Usage

* **Connect Your Mobile Device**

    * Open the web app on your browser.
    * Scan the QR code using your mobile device to connect it to the WebSocket server.
* **Stream Gyroscope Data**

    * Once connected, the mobile device starts sending gyroscope data in real time.
* **Control the Unity Application**

    * Use your mobile device’s orientation to interact with the Unity scene.

## Future Enhancements

* **Enhanced Controls:** Add haptic feedback and more interaction modes.

* **Multi-Device Support:** Allow multiple users to connect simultaneously.
* **Customizable QR Codes:** Personalize QR codes for unique sessions or device pairing.
* **Analytics Dashboard:** Track user interactions and gyroscope data trends.
