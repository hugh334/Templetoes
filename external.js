<script>
  // Wait until the DOM is ready
  document.addEventListener('DOMContentLoaded', function () {
    const audio   = document.getElementById('bgAudio');
    const prompt  = document.getElementById('audioPrompt');
    const accept  = document.getElementById('acceptBtn');
    const deny    = document.getElementById('denyBtn');
    const promptText = document.getElementById('promptText');
    // Show the prompt when the page loads
    prompt.style.display = 'block';
    // ----- Accept button -----
    accept.addEventListener('click', function () {
      // Unmute and play – this click is a user gesture, so browsers allow audible autoplay[web:16][web:18]
      audio.muted = false;
      audio.play().catch(err => {
        console.warn('Playback failed after unmuting:', err);
        alert('Could not start audio. Please try again.');
      });
      // Hide the prompt after acceptance
      prompt.style.display = 'none';
    });
    // ----- Deny button -----
    deny.addEventListener('click', function () {
      // Redirect to Google when the user denies audio
      window.location.href = 'https://www.google.com/';
    });
  });
</script>