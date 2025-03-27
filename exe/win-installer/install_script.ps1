# Add to user PATH permanently
$userPath = [Environment]::GetEnvironmentVariable("PATH", "User")
$installDir = "$env:ProgramFiles\Aion"

if ($userPath -notlike "*$installDir*") {
    [Environment]::SetEnvironmentVariable(
        "PATH",
        "$userPath;$installDir",
        "User"
    )
}

# Optionally keep system PATH modification
$systemPath = [Environment]::GetEnvironmentVariable("PATH", "Machine")
if ($systemPath -notlike "*$installDir*") {
    [Environment]::SetEnvironmentVariable(
        "PATH",
        "$systemPath;$installDir",
        "Machine"
    )
}

# Verify installation
if (Test-Path "$installDir\aion.exe") {
    Write-Host "✅ Aion installed successfully! Try 'aion --version' in a new terminal."
} else {
    Write-Host "❌ Installation failed!" -ForegroundColor Red
}