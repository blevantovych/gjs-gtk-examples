#!/usr/bin/env gjs

const Gtk = imports.gi.Gtk;

Gtk.init(null);

var appchooserdialog = new Gtk.AppChooserDialog({content_type: "text/plain"});
appchooserdialog.set_title('AppChooserDialog');
var response = appchooserdialog.run();

if (response == Gtk.ResponseType.OK)
{
    var info = appchooserdialog.get_app_info();
    print("Selected application: " + info.get_name())
}

appchooserdialog.destroy();
