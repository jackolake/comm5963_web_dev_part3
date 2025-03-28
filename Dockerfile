# Base Image = Python 3.13.2 + Linux Debian 12
FROM python:3.13.2-bookworm

# Create a working directory in the image
WORKDIR /practice

# Copy everything to the working directory
COPY . /practice

# Python was already installed, just need pip install
RUN pip install -r requirements.txt

# Allow port 80 to be used
EXPOSE 80

# Host app at port 80
CMD ["gunicorn", "--bind", "0.0.0.0:80", "flask_app:app"]


