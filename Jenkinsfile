pipeline {
    agent any

    environment {
        DOCKER_IMAGE = 'amolmahale96k/fb'
        DOCKER_CREDENTIALS_ID = 'dockerhub-credentials-id' // Jenkins credentials ID for Docker Hub
    }

    stages {
        stage('Checkout Code') {
            steps {
                // Clone the code from GitHub
                git branch: 'main', url: 'https://github.com/AmolMahale96K/facebook-react.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    // Build the Docker image using the Dockerfile
                    sh 'docker build -t ${DOCKER_IMAGE}:latest .'
                }
            }
        }

        stage('Push Docker Image') {
            steps {
                script {
                    // Log in to Docker Hub and push the image
                    sh """
                    echo $DOCKER_PASSWORD | docker login -u $DOCKER_USERNAME --password-stdin
                    docker push ${DOCKER_IMAGE}:latest
                    """
                }
            }
        }

        stage('Run Docker Container') {
            steps {
                script {
                    // Stop and remove any existing container
                    sh """
                    docker stop fb || true
                    docker rm fb || true
                    """

                    // Run the container
                    sh 'docker run -d -p 3000:3000 --name fb ${DOCKER_IMAGE}:latest'
                }
            }
        }
    }

    post {
        always {
            // Clean up workspace after the pipeline is done
            cleanWs()
        }
    }
}
