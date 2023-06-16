from rest_framework.generics import ListAPIView,CreateAPIView,DestroyAPIView,UpdateAPIView
from .serializers import NotesSerializers
from .models import Notes

class GetNotes(ListAPIView):
    queryset=Notes.objects.all()
    serializer_class=NotesSerializers

class CreateNotes(CreateAPIView):
    queryset=Notes.objects.all()
    serializer_class=NotesSerializers

class DeleteNotes(DestroyAPIView):
    queryset=Notes.objects.all()
    serializer_class=NotesSerializers

class UpdateNotes(UpdateAPIView):
    queryset=Notes.objects.all()
    serializer_class=NotesSerializers