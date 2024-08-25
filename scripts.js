// Mobile Menu Toggle
const menuToggle = document.createElement('div');
menuToggle.classList.add('menu-toggle');
menuToggle.innerHTML = '<span></span><span></span><span></span>';
document.querySelector('.navbar').appendChild(menuToggle);

menuToggle.addEventListener('click', () => {
    document.querySelector('.navbar ul').classList.toggle('active');
});

// Smooth Scrolling for Navbar Links
document.querySelectorAll('.navbar a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// 3D Animation with Three.js
let scene, camera, renderer, cube;

function init() {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('3d-container').appendChild(renderer.domElement);

    let geometry = new THREE.BoxGeometry();
    let material = new THREE.MeshStandardMaterial({ color: 0x61dafb });
    cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    // Add a light source
    let light = new THREE.PointLight(0xffffff, 1, 500);
    light.position.set(10, 10, 10);
    scene.add(light);

    camera.position.z = 5;

    animate();
}

function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
}

window.addEventListener('resize', function() {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
});

document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.filter-buttons .btn');
    const projects = document.querySelectorAll('.project-card');
    const apiButtons = document.querySelectorAll('.api-button');

    // Filter buttons functionality
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.getAttribute('data-filter');

            // Remove 'active' class from all buttons
            buttons.forEach(btn => btn.classList.remove('active'));
            // Add 'active' class to clicked button
            button.classList.add('active');

            // Show/Hide projects based on the filter
            projects.forEach(project => {
                if (filter === 'all' || project.getAttribute('data-category') === filter) {
                    project.style.display = 'block';
                } else {
                    project.style.display = 'none';
                }
            });
        });
    });

    // Show input forms for each project
    window.showInputForm = function() {
        document.querySelector('.input-container').style.display = 'block';
        document.querySelector('.project-grid').style.display = 'none';
    };

    window.showWhatsappForm = function() {
        document.querySelector('.whatsapp-container').style.display = 'block';
        document.querySelector('.project-grid').style.display = 'none';
    };

    window.showPhoneCallForm = function() {
        document.querySelector('.phonecall-container').style.display = 'block';
        document.querySelector('.project-grid').style.display = 'none';
    };

    window.showInstagramForm = function() {
        document.querySelector('.instagram-container').style.display = 'block';
        document.querySelector('.project-grid').style.display = 'none';
    };

    window.showEmailForm = function() {
        document.querySelector('.email-container').style.display = 'block';
        document.querySelector('.project-grid').style.display = 'none';
    };

    window.showScheduleEmailForm = function() {
        document.querySelector('#schedule-email').style.display = 'block';
        document.querySelector('.project-grid').style.display = 'none';
    };

    window.showTextToSpeechForm = function() {
        document.querySelector('.text-to-speech-container').style.display = 'block';
        document.querySelector('.project-grid').style.display = 'none';
    };


    window.showGoogleSearchForm = function() {
        document.querySelector('.google-search-container').style.display = 'block';
        document.querySelector('.project-grid').style.display = 'none';
    };
    window.showAWSForm = function() {
        document.querySelector('.aws-container').style.display = 'block';
        document.querySelector('.project-grid').style.display = 'none';
    };
    window.showCapturePhotoForm = function() {
        document.querySelector('.capture-photo-container').style.display = 'block';
        document.querySelector('.project-grid').style.display = 'none';
    };
    window.showInstagramUploadForm = function() {
        document.querySelector('.instagram-upload-container').style.display = 'block';
        document.querySelector('.project-grid').style.display = 'none';
    };
    window.showImageFilterForm = function() {
        document.querySelector('#image-filter').style.display = 'block';
        document.querySelector('.project-grid').style.display = 'none';
    };

    window.showLiveCaptureForm = function() {
        document.querySelector('.live-capture-container').style.display = 'block';
        document.querySelector('.project-grid').style.display = 'none';
    };
    window.showCapturePhotoForm = function() {
        document.querySelector('.photo-capture-container').style.display = 'block';
        document.querySelector('.project-grid').style.display = 'none';
    };
    window.showSpeechToTextForm = function() {
        document.querySelector('.speech-to-text-container').style.display = 'block';
        document.querySelector('.project-grid').style.display = 'none';
    };

    window.showVLCForm = function() {
        document.querySelector('.vlc-container').style.display = 'block';
        document.querySelector('.project-grid').style.display = 'none';
    };
    window.showPhotoCaptureForm = function() {
        document.querySelector('.project-grid').style.display = 'none';
        document.querySelector('#photo-capture-container').style.display = 'block';
    };
    window.showLiveStreamingForm = function() {
        document.querySelector('#live-streaming-container').style.display = 'block';
        document.querySelector('.project-grid').style.display = 'none';
    };
    window.showShortcutForm = function() {
        document.querySelector('#linux-shortcut-container').style.display = 'block';
        document.querySelector('.project-grid').style.display = 'none';
    };
    window.showEspeakForm = function() {
        document.querySelector('.espeak-container').style.display = 'block';
        document.querySelector('.project-grid').style.display = 'none';
    };
    window.showPingForm = function() {
        document.querySelector('#ping-chat-container').style.display = 'block';
        document.querySelector('.project-grid').style.display = 'none';
    };
    window.showDockerForm = function() {
        document.querySelector('#docker-container').style.display = 'block';
        document.querySelector('.project-grid').style.display = 'none';
    };
    window.showPhotoCaptureForm = function() {
        document.querySelector('.photos-capture-container').style.display = 'block';
        document.querySelector('.project-grid').style.display = 'none';
    };



    // Go back to the project list
    window.goBack = function() {
        document.querySelector('.project-grid').style.display = 'block';
        document.querySelector('.input-container').style.display = 'none';
        document.querySelector('.whatsapp-container').style.display = 'none';
        document.querySelector('.phonecall-container').style.display = 'none';
        document.querySelector('.instagram-container').style.display = 'none';
        document.querySelector('.email-container').style.display = 'none';
        document.querySelector('#schedule-email').style.display = 'none';
        document.querySelector('.google-search-container').style.display = 'none';
        document.querySelector('.aws-container').style.display = 'none';
        document.querySelector('.text-to-speech-container').style.display = 'none';
        document.querySelector('.capture-photo-container').style.display = 'none';
        document.querySelector('.instagram-upload-container').style.display = 'none';
        document.querySelector('#image-filter').style.display = 'none';
        document.querySelector('.live-capture-container').style.display = 'none';
        document.querySelector('.photo-capture-container').style.display = 'none';
        document.querySelector('.speech-to-text-container').style.display = 'none';
        document.querySelector('.vlc-container').style.display = 'none';
        document.querySelector('#photo-capture-container').style.display = 'none';
        document.querySelector('#live-streaming-container').style.display = 'none';
        document.querySelector('.linux-shortcut-container').style.display = 'none';
        document.querySelector('espeak-container').style.display = 'none';
        document.querySelector('#ping-chat-container').style.display = 'none';
        document.querySelector('.project-grid').style.display = 'grid';
        document.querySelector('#docker-container').style.display = 'none';
        document.querySelector('.photos-capture-container').style.display = 'none';

    };

    // Function to send text message
    window.sendTextMessage = function() {
        const message = document.getElementById('sms-message').value;
        const recipient = document.getElementById('sms-recipient').value;

        fetch('/text_message', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ message, to: recipient })
            })
            .then(response => response.json())
            .then(data => {
                document.getElementById('confirmation-message').textContent = data.status === 'success' ? 'Message sent successfully!' : 'Failed to send message.';
            });
    };

    // Function to send WhatsApp message using Infobip API
    window.sendWhatsAppMessage = function() {
        const recipient = document.getElementById('whatsapp-recipient').value;
        const templateName = document.getElementById('whatsapp-template-name').value;
        const placeholder = document.getElementById('whatsapp-placeholder').value;

        fetch('/send_whatsapp', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    to: recipient,
                    templateName: templateName,
                    placeholder: placeholder
                })
            })
            .then(response => response.json())
            .then(data => {
                document.getElementById('whatsapp-confirmation-message').textContent = data.status === 'success' ? 'WhatsApp message sent successfully!' : 'Failed to send WhatsApp message.';
            })
            .catch(error => {
                console.error('Error:', error);
            });
    };


    // Function to make a phone call
    window.makePhoneCall = function() {
        const recipient = document.getElementById('call-recipient').value;

        fetch('/make_phone_call', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ to: recipient })
            })
            .then(response => response.json())
            .then(data => {
                document.getElementById('phonecall-confirmation-message').textContent = data.status === 'success' ? 'Call initiated successfully!' : 'Failed to initiate call.';
            });
    };

    // Function to post Instagram photo
    window.postInstagramPhoto = function() {
        const username = document.getElementById('instagram-username').value;
        const password = document.getElementById('instagram-password').value;
        const caption = document.getElementById('instagram-caption').value;
        const photo = document.getElementById('instagram-photo').files[0];

        const formData = new FormData();
        formData.append('username', username);
        formData.append('password', password);
        formData.append('caption', caption);
        formData.append('photo', photo);

        fetch('/post_photo', {
                method: 'POST',
                body: formData
            })
            .then(response => response.json())
            .then(data => {
                document.getElementById('instagram-confirmation-message').textContent = data.status === 'success' ? 'Photo posted successfully!' : 'Photo posted successfully!.';
            });
    };

    // Function to send the email
    window.sendEmail = function() {
        const receiverEmail = document.getElementById('email-recipient').value;
        const subject = document.getElementById('email-subject').value;
        const message = document.getElementById('email-message').value;

        fetch('/send_email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    receiver_email: receiverEmail,
                    subject: subject,
                    message: message,
                })
            })
            .then(response => response.json())
            .then(data => {
                if (data.status === 'success') {
                    document.getElementById('email-confirmation-message').textContent = `Email has been sent to ${receiverEmail}`;
                } else {
                    document.getElementById('email-confirmation-message').textContent = `Error: ${data.message}`;
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
    };

    // Function to schedule the email
    window.scheduleEmail = function() {
        const receiverEmail = document.getElementById('schedule-email-recipient').value;
        const subject = document.getElementById('schedule-email-subject').value;
        const message = document.getElementById('schedule-email-message').value;
        const scheduleTime = document.getElementById('schedule-email-time').value;

        fetch('/schedule_email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    receiver_email: receiverEmail,
                    subject: subject,
                    message: message,
                    schedule_time: scheduleTime,
                })
            })
            .then(response => response.json())
            .then(data => {
                document.getElementById('schedule-email-confirmation-message').textContent = data.status === 'success' ? 'Email scheduled successfully!' : 'Failed to schedule email.';
            })
            .catch(error => {
                console.error('Error:', error);
            });
    };

    // Function to perform Google search
    window.performGoogleSearch = function() {
        const query = document.getElementById('google-query').value;
        const numResults = parseInt(document.getElementById('google-results').value, 10); // Convert to integer

        fetch('/google_search', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ query, num_results: numResults })
            })
            .then(response => response.json())
            .then(data => {
                if (data.status === 'success') {
                    const resultsContainer = document.getElementById('search-results');
                    resultsContainer.innerHTML = '<h3>Search Results:</h3>';
                    data.results.forEach((result, index) => {
                        resultsContainer.innerHTML += `<p>${index + 1}. <a href="${result}" target="_blank">${result}</a></p>`;
                    });
                } else {
                    document.getElementById('search-results').innerHTML = `Error: ${data.message}`;
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });


    };
    // Function to launch AWS EC2 instance
    window.launchEC2Instance = function() {
        fetch('/launch_ec2', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                }
            })
            .then(response => response.json())
            .then(data => {
                document.getElementById('aws-confirmation-message').textContent = data.status === 'success' ? 'EC2 Instance launched successfully!' : 'Failed to launch EC2 instance.';
            })
            .catch(error => {
                console.error('Error:', error);
            });
    };

    // Function to convert text to speech
    window.convertTextToSpeech = function() {
        const text = document.getElementById('text-to-speech-input').value;

        fetch('/text_to_speech', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ text: text }),
            })
            .then(response => response.json())
            .then(data => {
                document.getElementById('text-to-speech-confirmation-message').textContent = data.status === 'success' ? 'Text converted to speech successfully!' : 'Failed to convert text to speech.';
            })
            .catch(error => {
                console.error('Error:', error);
            });
    };
    // Function to start the image filter
    window.startImageFilter = function() {
        fetch('/start_filter', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                }
            })
            .then(response => response.json())
            .then(data => {
                if (data.status === 'success') {
                    document.getElementById('filter-response').textContent = 'Image filter started successfully!';
                } else {
                    document.getElementById('filter-response').textContent = 'Failed to start image filter.';
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
    };
    // function to click and send email
    window.captureAndSendEmail = function() {
        const senderEmail = document.getElementById('sender-email').value;
        const senderPassword = document.getElementById('sender-password').value;
        const receiverEmail = document.getElementById('receiver-email').value;

        fetch('/capture_and_send_email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    sender_email: senderEmail,
                    sender_password: senderPassword,
                    receiver_email: receiverEmail,
                })
            })
            .then(response => response.json())
            .then(data => {
                alert(data.message);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    };
    // Function to upload Instagram photo
    window.uploadInstagramPhoto = function() {
        const username = document.getElementById('instagram-username').value;
        const password = document.getElementById('instagram-password').value;
        const caption = document.getElementById('instagram-caption').value;
        const photo = document.getElementById('instagram-photo').files[0];

        const formData = new FormData();
        formData.append('username', username);
        formData.append('password', password);
        formData.append('caption', caption);
        formData.append('photo', photo);

        fetch('/upload_instagram_photo', {
                method: 'POST',
                body: formData
            })
            .then(response => response.json())
            .then(data => {
                document.getElementById('instagram-confirmation-message').textContent = data.message;
            })
            .catch(error => {
                console.error('Error:', error);
                document.getElementById('instagram-confirmation-message').textContent = 'Failed to upload photo.';
            });
    };
    // Function to apply image filters
    window.applyImageFilter = function() {
        const imageFile = document.getElementById('image-upload').files[0];

        const formData = new FormData();
        formData.append('image', imageFile);

        fetch('/apply_image_filters', {
                method: 'POST',
                body: formData
            })
            .then(response => response.json())
            .then(data => {
                document.getElementById('filter-confirmation-message').textContent = data.message;
            })
            .catch(error => {
                console.error('Error:', error);
            });
    };
    // docker launched
    window.launchWebServer = function() {
        fetch('/launch_webserver', {
                method: 'POST'
            })
            .then(response => response.json())
            .then(data => {
                alert(data.message);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    };
    // Function to start live video capture and face cropping
    window.startLiveVideoCapture = function() {
        fetch('/live_video_capture_and_crop')
            .then(response => response.text())
            .then(data => {
                document.getElementById('live-capture-message').textContent = data;
            })
            .catch(error => {
                console.error('Error:', error);
                document.getElementById('live-capture-message').textContent = 'Failed to start live video capture.';
            });
    };
    // Function to capture a photo
    window.capturePhoto = function() {
        fetch('/capture_photo')
            .then(response => response.json())
            .then(data => {
                document.getElementById('photo-capture-message').textContent = "Photo captured successfully and saved in the output folder.";
            })
            .catch(error => {
                console.error('Error:', error);
                document.getElementById('photo-capture-message').textContent = "Failed to capture photo.";
            });
    };

    // Function to start the speech-to-text process
    window.startSpeechToText = function() {
        const messageElement = document.getElementById('speech-to-text-message');
        messageElement.textContent = "";

        const eventSource = new EventSource('/speech_to_text');

        eventSource.onmessage = function(event) {
            messageElement.textContent += event.data + "\n";
            console.log(event.data);

            // Close the connection if the recognition is complete
            if (event.data.includes("You said:") || event.data.includes("Sorry")) {
                eventSource.close();
            }
        };

        eventSource.onerror = function() {
            messageElement.textContent += "An error occurred. Please try again.";
            eventSource.close();
        };
    };
    window.runTrain = function() {

        fetch('/run_train', {
                method: 'GET'
            })
            .then(response => response.json())
            .then(data => {
                if (data.message) {
                    alert(data.message);
                } else {
                    alert('Failed to run the train.');
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
    };

    // Function to start VLC streaming
    window.startVLCStreaming = function() {
        const videoPath = document.getElementById('vlc-video-path').value;
        const streamUrl = document.getElementById('vlc-stream-url').value;

        fetch('/start_vlc_stream', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    video_path: videoPath,
                    stream_url: streamUrl,
                })
            })
            .then(response => response.json())
            .then(data => {
                if (data.status === 'success') {
                    document.getElementById('vlc-confirmation-message').textContent = 'VLC streaming started successfully!';
                } else {
                    document.getElementById('vlc-confirmation-message').textContent = `Error: ${data.message}`;
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
    };

    // Function to capture and transfer the photo
    window.captureAndTransferPhoto = function() {
        const remoteUser = document.getElementById('remote-user').value;
        const remoteHost = document.getElementById('remote-host').value;
        const remotePath = document.getElementById('remote-path').value;

        fetch('/capture_and_transfer', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ remote_user: remoteUser, remote_host: remoteHost, remote_path: remotePath })
            })
            .then(response => response.json())
            .then(data => {
                document.getElementById('photo-capture-confirmation-message').textContent = data.status === 'success' ? data.message : `Error: ${data.message}`;
            })
            .catch(error => {
                console.error('Error:', error);
            });
    };

    // Start live streaming
    window.startLiveStreaming = function() {
        const streamUrl = document.getElementById('stream-url').value;
        const cameraDevice = document.getElementById('camera-device').value;

        fetch('/start_live_streaming', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ stream_url: streamUrl, camera_device: cameraDevice })
            })
            .then(response => response.json())
            .then(data => {
                document.getElementById('live-streaming-confirmation-message').textContent = data.status === 'success' ? 'Streaming started successfully!' : 'Failed to start streaming.';
            });
    };
    // Function to find Linux Shortcut
    window.findLinuxShortcut = function() {
        const keyword = document.getElementById('shortcut-keyword').value.trim();

        if (keyword) {
            fetch('/find_shortcut', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ keyword: keyword })
                })
                .then(response => response.json())
                .then(data => {
                    if (data.shortcut) {
                        document.getElementById('shortcut-result-message').textContent = `Shortcut for "${keyword}": ${data.shortcut}`;
                    } else {
                        document.getElementById('shortcut-result-message').textContent = 'No shortcuts found for the given keyword.';
                    }
                })
                .catch(error => {
                    console.error('Error:', error);
                    document.getElementById('shortcut-result-message').textContent = 'An error occurred while searching for the shortcut.';
                });
        } else {
            document.getElementById('shortcut-result-message').textContent = 'Please enter a keyword to search for the shortcut.';
        }
    };
    // Modify espeak command
    window.modifyEspeak = function() {
        const text = document.getElementById('espeak-text').value;
        const speed = document.getElementById('espeak-speed').value;
        const voice = document.getElementById('espeak-voice').value;

        fetch('/modify_espeak', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ text: text, speed: speed, voice: voice })
            })
            .then(response => response.json())
            .then(data => {
                if (data.status === 'success') {
                    document.getElementById('espeak-result-message').textContent = 'Espeak command executed successfully.';
                } else {
                    document.getElementById('espeak-result-message').textContent = 'Error: ' + (data.error || 'Unknown error');
                }
            })
            .catch(error => {
                console.error('Error:', error);
                document.getElementById('espeak-result-message').textContent = 'Error occurred.';
            });
    };
    // Send Ping Command
    window.sendChatPing = function() {
        const address = document.getElementById('ping-address').value;
        const message = document.getElementById('ping-message').value;
    
        fetch('/send_ping', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ address: address, message: message })
            })
            .then(response => response.json())
            .then(data => {
                if (data.status === 'success') {
                    document.getElementById('ping-result-message').textContent = 'Ping sent successfully. Result: ' + data.result;
                } else {
                    document.getElementById('ping-result-message').textContent = 'Error: ' + data.error;
                }
            })
            .catch(error => {
                console.error('Error:', error);
                document.getElementById('ping-result-message').textContent = 'Error occurred.';
            });
    };
    
    // Run Docker Program
    window.runDockerProgram = function() {
        const imageName = document.getElementById('docker-image').value;
        const scriptPath = document.getElementById('python-script').value;

        fetch('/run_docker', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ image: imageName, script: scriptPath })
            })
            .then(response => response.json())
            .then(data => {
                document.getElementById('docker-result-message').textContent = data.status === 'success' ? 'Program executed successfully.' : 'Error: ' + data.error;
            })
            .catch(error => {
                console.error('Error:', error);
                document.getElementById('docker-result-message').textContent = 'Error occurred.';
            });
    };


}); // The JavaScript code you provided or the revised code goes here
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.filter-buttons .btn');
    const projects = document.querySelectorAll('.project-card');
    const video = document.getElementById('video');
    const canvas = document.getElementById('canvas');
    const snapButton = document.getElementById('snap');
    const context = canvas.getContext('2d');

    // Filter buttons functionality
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.getAttribute('data-filter');

            // Remove 'active' class from all buttons
            buttons.forEach(btn => btn.classList.remove('active'));
            // Add 'active' class to clicked button
            button.classList.add('active');

            // Show/Hide projects based on the filter
            projects.forEach(project => {
                if (filter === 'all' || project.getAttribute('data-category') === filter) {
                    project.style.display = 'block';
                } else {
                    project.style.display = 'none';
                }
            });
        });
    });

    // Show the photo capture form
    window.showPhotoCaptureForm = function() {
        document.querySelector('.photos-capture-container').style.display = 'block';
        document.querySelector('.project-grid').style.display = 'none';
        initializeWebcam(); // Initialize webcam when showing the form
    };

    // Go back to the project list
    window.goBack = function() {
        document.querySelector('.photos-capture-container').style.display = 'none';
        document.querySelector('.project-grid').style.display = 'grid'; // Ensure the grid is visible
    };

    // Function to initialize webcam
    function initializeWebcam() {
        if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
            navigator.mediaDevices.getUserMedia({ video: true })
                .then((stream) => {
                    video.srcObject = stream;
                    video.play();
                })
                .catch((err) => {
                    console.error("Error accessing the camera: " + err);
                    alert("Error accessing the camera. Please check your device permissions.");
                });
        } else {
            console.error("getUserMedia not supported on this browser.");
            alert("Webcam not supported on this browser.");
        }
    }

    // Function to capture a photo from the webcam
    window.capturePhoto = function() {
        // Ensure the video is ready
        if (video.readyState === video.HAVE_ENOUGH_DATA) {
            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;
            context.drawImage(video, 0, 0, canvas.width, canvas.height);
            document.getElementById('photo-capture-confirmation-message').textContent = 'Photo captured successfully!';
        } else {
            console.error("Video not ready to capture.");
            alert("Video is not ready yet. Please try again.");
        }
    };

    // Function to reset the capture (clear canvas and reset video stream)
    window.resetCapture = function() {
        context.clearRect(0, 0, canvas.width, canvas.height);
        document.getElementById('photo-capture-confirmation-message').textContent = '';
    };

    // Attach event listener to the snap button
    snapButton.addEventListener('click', window.capturePhoto);
}); // JavaScript code to handle the chat functionality

// Function to show the Chat Form
window.showChatForm = function() {
    document.querySelector('.chat-ai21-container').style.display = 'block'; // Show chat form
    document.querySelector('.project-grid').style.display = 'none'; // Hide project container
}

// Function to go back to projects list
window.goBack = function() {
    document.querySelector('.chat-ai21-container').style.display = 'none'; // Hide chat form
    document.querySelector('.project-grid').style.display = 'block'; // Show project container
}

document.addEventListener('DOMContentLoaded', () => {
    // Initialize required elements
    const inputText = document.getElementById('input-text');
    const sendButton = document.getElementById('send-button');
    const micButton = document.getElementById('mic-button');
    const messageContainer = document.getElementById('message-container');

    // Function to display messages
    function displayMessage(text, isUser = true) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${isUser ? 'user-message' : 'bot-message'}`;
        messageDiv.textContent = text;
        messageContainer.appendChild(messageDiv);
        messageContainer.scrollTop = messageContainer.scrollHeight;
    }

    // Function to send user input to AI21 API
    async function sendMessageToAI21(message) {
        displayMessage(message, true); // Display user message

        try {
            const response = await fetch('/chat_ai21', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ message: message })
            });

            const data = await response.json();
            const botMessage = data.response;
            displayMessage(botMessage, false); // Display bot message
        } catch (error) {
            console.error('Error:', error);
            displayMessage('Error communicating with AI21. Please try again later.', false);
        }
    }

    // Event listener for send button
    sendButton.addEventListener('click', () => {
        const message = inputText.value;
        if (message.trim() !== '') {
            sendMessageToAI21(message);
            inputText.value = '';
        }
    });

    // Voice recognition setup
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.lang = 'en-US';

    // Event listener for mic button
    micButton.addEventListener('click', () => {
        recognition.start();
    });

    // Handle the result of speech
    recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        inputText.value = transcript;
        sendMessageToAI21(transcript);
    };
});

init();
