pipeline {
    agent any

    stages {
        stage('Checkout Code') {
            steps {
                git branch: 'main', url: '<your-repo-url>'
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    sh 'docker build -t facebook .'
                }
            }
        }

        stage('Push Docker Image') {
            steps {
                script {
                    docker.withRegistry('https://index.docker.io/v1/', 'dockerhub-credentials') {
                        sh 'docker tag facebook amolmahale96k/facebook:latest'
                        sh 'docker push amolmahale96k/facebook:latest'
                    }
                }
            }
        }

        stage('Deploy to AWS EC2') {
            steps {
                sshagent(['ec2-ssh-credentials']) {
                    sh """
                        ssh -o StrictHostKeyChecking=no ec2-user@<EC2_PUBLIC_IP> << EOF
                        docker pull amolmahale96k/facebook:latest
                        docker stop facebook || true
                        docker rm facebook || true
                        docker run -d -p 80:3000 --name facebook amolmahale96k/facebook:latest
                        EOF
                    """
                }
            }
        }
    }
}
