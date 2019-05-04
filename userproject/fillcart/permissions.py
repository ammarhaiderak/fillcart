from rest_framework import permissions


class ProductUpdatePermission(permissions.BasePermission):

    def has_object_permission(self, request, view, obj):
        """does user have permission to update a profile"""
        if request.method in permissions.SAFE_METHODS:
            return True

        return request.user.is_active and request.user.is_superuser



class ReadOnly(permissions.BasePermission):
    def has_permission(self, request, view):
        return request.method in permissions.SAFE_METHODS
