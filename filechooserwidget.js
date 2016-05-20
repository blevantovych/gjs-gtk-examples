#!/usr/bin/env gjs

const Gtk = imports.gi.Gtk;

Gtk.init(null);

function on_file_activated()
{
    print("Selected file: " + filechooserwidget.get_filename());
}

var window = new Gtk.Window();
window.set_default_size(600, 400);
window.set_border_width(5);
window.set_title("FileChooserWidget");
window.connect("destroy", Gtk.main_quit);

var grid = new Gtk.Grid();
grid.set_row_spacing(5);
window.add(grid);

var filechooserwidget = new Gtk.FileChooserWidget();
filechooserwidget.set_vexpand(true);
filechooserwidget.connect("file-activated", on_file_activated)
grid.attach(filechooserwidget, 0, 0, 1, 1);

window.show_all();

Gtk.main();
