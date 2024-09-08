from django.contrib.auth import get_user_model
from django.http import JsonResponse
from django.contrib.auth import authenticate, login
from django.http import JsonResponse



User = get_user_model()

def register(request):
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']
        
        if User.objects.filter(username=username).exists():
            return JsonResponse({'error': 'User already exists'}, status=400)
        
        user = User(username=username)
        user.set_password(password)  # Hash automatico
        user.save()

        return JsonResponse({'success': 'User registered'}, status=201)
def login_view(request):
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']
        
        user = authenticate(request, username=username, password=password)
        
        if user is not None:
            login(request, user)
            return JsonResponse({'success': 'Login successful'}, status=200)
        else:
            return JsonResponse({'error': 'Invalid credentials'}, status=401)