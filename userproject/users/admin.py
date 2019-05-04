from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
# Register your models here.
from .forms import MyUserCreationForm, MyUserChangeForm
from .models import MyUser

class MyUserAdmin(UserAdmin):
    add_form = MyUserCreationForm
    form = MyUserChangeForm
    model = MyUser
    list_display = ['email', 'username', 'name']

admin.site.register(MyUser, MyUserAdmin)


