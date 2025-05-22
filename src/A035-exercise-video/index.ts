interface VideoPlayerElements {
  videoPlayer: HTMLVideoElement;
  playButton: HTMLButtonElement;
  stopButton: HTMLButtonElement;
}

interface VideoPlayerProtocol {
  playToggle(): void;
  stopToggle(): void;
  initEvents(): void;
}

export class VideoPlayer implements VideoPlayerProtocol {
  private videoPlayer: HTMLVideoElement;
  private playButton: HTMLButtonElement;
  private stopButton: HTMLButtonElement;

  constructor(videoPlayerElements: VideoPlayerElements) {
    this.videoPlayer = videoPlayerElements.videoPlayer;
    this.playButton = videoPlayerElements.playButton;
    this.stopButton = videoPlayerElements.stopButton;
  }

  playToggle(): void {
    if (this.videoPlayer.paused) {
      this.videoPlayer.play();
      this.playButton.innerText = "Pause";
    } else {
      this.videoPlayer.pause();
      this.playButton.innerText = "Play";
    }
  }

  stopToggle(): void {
    this.videoPlayer.pause();
    this.videoPlayer.currentTime = 0;
    this.playButton.innerText = "Play";
  }

  initEvents(): void {
    this.playButton.addEventListener("click", () => {
      this.playToggle();
    })

    this.stopButton.addEventListener("click", () => {
      this.stopToggle();
    })
  }
}

const videoPlayer = new VideoPlayer({
  videoPlayer: document.querySelector(".video") as HTMLVideoElement,
  playButton: document.querySelector(".play") as HTMLButtonElement,
  stopButton: document.querySelector(".stop") as HTMLButtonElement
})

videoPlayer.initEvents();
