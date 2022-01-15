from django.shortcuts import render
from django.views.generic import TemplateView
from pytube import YouTube
from django.conf import settings
import os

# DRF
from rest_framework import viewsets, status
from rest_framework.response import Response


class IndexView(TemplateView):
    template_name = 'index.html'

class YoutubeView(viewsets.ModelViewSet):
    file_path = './media/downloads'

    def post(self, request):
        
        if ('url' in request.data):
            try:
                obj = YouTube(request.data['url'])
            except:
                return Response({'msg': 'Url invalida'}, status=status.HTTP_202_ACCEPTED)

            context = {}
            context['url'] = f"{self.file_path}/{obj.title}.mp4"
            context['name'] = f"{obj.title}.mp4"
            context['thumb'] = obj.video_id
            context['channel'] = obj.author
            context['duration'] = f"{str(obj.length/60)[0]}:{obj.length % 60}"

            return Response(context, status=status.HTTP_202_ACCEPTED)

        elif 'id' in request.data:
            try:
                obj = YouTube(f"https://www.youtube.com/watch?v={request.data['id']}")
            except:
                return Response({'msg': 'Url invalida'}, status=status.HTTP_202_ACCEPTED)

            context = {}
            name = self.filter_string(obj.title)

            if request.data['type'] == 'mp3':
                context['path'] = obj.streams.get_audio_only().download(self.file_path, f'{name}.mp4')
            elif request.data['type'] == 'video':
                obj.streams.get_highest_resolution().download(self.file_path, f"{obj.title}.mp4")
            else:
                return Response({'msg': 'Informações inválidas'}, status=status.HTTP_202_ACCEPTED)

            context['url'] = f"{self.file_path}/{name}.mp4"
            context['name'] = f"{name}.mp4"
            return Response(context, status=status.HTTP_202_ACCEPTED)
        else:
            return Response({'msg': 'Informações inválidas'}, status=status.HTTP_202_ACCEPTED)


    def filter_string(self, text):
        newString = text.replace("/", "")
        return newString