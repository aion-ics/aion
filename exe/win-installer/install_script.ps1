# Add to system PATH permanently
$path = [Environment]::GetEnvironmentVariable("PATH", "Machine")
$installDir = "$env:ProgramFiles\Aion"

if ($path -notlike "*$installDir*") {
    [Environment]::SetEnvironmentVariable(
        "PATH",
        "$path;$installDir",
        "Machine"
    )
}

# Verify installation
if (Test-Path "$installDir\aion.exe") {
    Write-Host "✅ Aion installed successfully! Try 'aion --version' in a new terminal."
} else {
    Write-Host "❌ Installation failed!" -ForegroundColor Red
}