#!/usr/bin/env gjs

const Gtk = imports.gi.Gtk;

Gtk.init(null);

function on_file_set(widget)
{
    print("Selected file: " + widget.get_filename());
}

var window = new Gtk.Window();
window.set_default_size(200, -1);
window.set_title("FileChooserButton");
window.connect("destroy", Gtk.main_quit);

var filechooserbutton = new Gtk.FileChooserButton();
filechooserbutton.connect("file-set", function() {on_file_set(filechooserbutton)});
window.add(filechooserbutton);

window.show_all();

Gtk.main();
