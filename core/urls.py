from django.contrib import admin
from django.urls import path
from .views import IndexView, YoutubeView

urlpatterns = [
    path('', IndexView.as_view(), name='index'),
     path('api/', YoutubeView.as_view({
        'post': 'post',
    })),
]