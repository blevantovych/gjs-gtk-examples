#!/usr/bin/env gjs

const Gtk = imports.gi.Gtk;

Gtk.init(null);

var window = new Gtk.Window({type: Gtk.WindowType.TOPLEVEL});
window.set_title("EntryBuffer");
window.connect("destroy", Gtk.main_quit);

var box = new Gtk.Box({orientation: Gtk.Orientation.VERTICAL});
window.add(box);

var entrybuffer = new Gtk.EntryBuffer();
entrybuffer.set_text("Text in a buffer...", -1);

var entry = new Gtk.Entry();
entry.set_buffer(entrybuffer);
box.pack_start(entry, false, false, 0);
var entry = new Gtk.Entry();
entry.set_buffer(entrybuffer);
box.pack_start(entry, false, false, 0);
var entry = new Gtk.Entry();
entry.set_buffer(entrybuffer);
box.pack_start(entry, false, false, 0);

window.show_all();

Gtk.main();
