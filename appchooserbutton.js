#!/usr/bin/env gjs

const Gtk = imports.gi.Gtk;

Gtk.init(null);

function on_app_chooser_changed(appchooserbutton)
{
    var info = appchooserbutton.get_app_info();
    print("Selected application: " + info.get_name())
}

var window = new Gtk.Window();
window.set_title("AppChooserButton");
window.set_default_size(200, -1);
window.connect("destroy", Gtk.main_quit);

var appchooserbutton = new Gtk.AppChooserButton({content_type: "text/plain"});
appchooserbutton.connect("changed", on_app_chooser_changed);
window.add(appchooserbutton);

window.show_all();

Gtk.main();
