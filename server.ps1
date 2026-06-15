$listener = [System.Net.HttpListener]::new()
$listener.Prefixes.Add('http://localhost:8080/')
$listener.Start()
Write-Host 'Server started on http://localhost:8080'

while ($listener.IsListening) {
    $ctx = $listener.GetContext()
    $req = $ctx.Request
    $resp = $ctx.Response
    $path = $req.Url.LocalPath

    if ($path -eq '/') { $path = '/index.html' }

    $filePath = Join-Path 'D:\perumal\Antigravity IDE\hola-ai-companion' $path.TrimStart('/')

    if (Test-Path $filePath) {
        $content = [System.IO.File]::ReadAllBytes($filePath)
        $ext = [System.IO.Path]::GetExtension($filePath)
        switch ($ext) {
            '.html' { $resp.ContentType = 'text/html; charset=utf-8' }
            '.css'  { $resp.ContentType = 'text/css; charset=utf-8' }
            '.js'   { $resp.ContentType = 'application/javascript; charset=utf-8' }
            default { $resp.ContentType = 'application/octet-stream' }
        }
        $resp.ContentLength64 = $content.Length
        $resp.OutputStream.Write($content, 0, $content.Length)
    } else {
        $resp.StatusCode = 404
        $msg = [System.Text.Encoding]::UTF8.GetBytes('Not Found')
        $resp.OutputStream.Write($msg, 0, $msg.Length)
    }
    $resp.OutputStream.Close()
}
