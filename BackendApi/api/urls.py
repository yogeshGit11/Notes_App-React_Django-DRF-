from django.urls import path
from . import views

urlpatterns = [
    path('ListNotes/',views.GetNotes.as_view()),
    path('CreateNotes/',views.CreateNotes.as_view()),
    path('UpdateNotes/<pk>',views.UpdateNotes.as_view()),
    path('DeleteNotes/<pk>',views.DeleteNotes.as_view()),
]
