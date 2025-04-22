!#/bin/bash



npm run build
if [ $? -ne 0 ]; then
  echo "❌ Build failed. Aborting script."
  exit 1
fi


npx cap sync
npx cap copy


# Open or focus Android Studio
powershell.exe -Command "
$studio = Get-Process -Name 'studio64' -ErrorAction SilentlyContinue;
if (\$studio) {
  Write-Output '🔍 Android Studio is already running. Focusing...';
  (New-Object -ComObject WScript.Shell).AppActivate(\$studio.Id) | Out-Null
} else {
  Write-Output '🚀 Launching Android Studio...';
  Start-Process 'C:\\Program Files\\Android\\Android Studio\\bin\\studio64.exe'
}
"
