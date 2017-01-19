:loop
powershell Start-Process .\test-jasmine.bat
timeout 30
goto loop
